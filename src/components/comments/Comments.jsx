import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import classes from "./Coments.module.css"
import NewCommentForm from "./NewCommentForm"

import useHttp from "../../hooks/use-http"
import { getAllComment } from "../../lib/api"
import LoadingSpinner from "../UI/LoadingSpinner"


const Comments = () => {

    const [isAddingComment, setIsAddingComment] = useState(false)
    const params = useParams()
    const { executeRequest, data: loadedComments, status } = useHttp(
        getAllComment,
        true
    )

    const { quoteId } = params
    useEffect(() => {
        executeRequest(quoteId)
    }, [executeRequest, quoteId])
    // setting loading state to add comment
    const addLoadingCommentHandler = () => {
        setIsAddingComment(true)
    }

    let comments // JSX component to load comments
    if (status === "pending") {
        comments = <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (status === "completed" && loadedComments.length > 0) {
        comments = <div>{loadedComments.map(comment => <p>{comment.text}</p>)}</div>
    }

    if (status === "completed" && (!loadedComments || loadedComments.length === 0)) {
        comments = <p className="centered">
            No Comments Found
        </p>
    }

    // when comment is added to firebase
    const commentAddedHandler = useCallback(() => {
        // need to wrap this func by useCallback to avoid inifinte loop
        // as we are using this fucniton as dependency in comment form

        // reload comment list data
        executeRequest(quoteId)
    }, [executeRequest, quoteId])

    return (
        <section className={classes.comments}>
            <h1>User Comments</h1>
            {!isAddingComment && (
                <button className='btn' onClick={addLoadingCommentHandler}>
                    Add Comment
                </button>
            )}
            {isAddingComment &&
                <NewCommentForm
                    quoteId={quoteId}
                    onCommentAdded={commentAddedHandler}
                />}
            {comments}
        </section>
    )
}

export default Comments