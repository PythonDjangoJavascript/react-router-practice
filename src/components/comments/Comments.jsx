import { useCallback, useState } from "react"
import { useParams } from "react-router-dom"
import classes from "./Coments.module.css"
import NewCommentForm from "./NewCommentForm"


const Comments = () => {

    const [isAddingComment, setIsAddingComment] = useState(false)
    const params = useParams()

    // setting loading state to add comment
    const addLoadingCommentHandler = () => {
        setIsAddingComment(true)
    }

    // when comment is added to firebase
    const commentAddedHandler = useCallback(() => {
        // need to wrap this func by useCallback to avoid inifinte loop
        // as we are using this fucniton as dependency in comment form

        // reload comment list data
    }, [])

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
                    quoteId={params.quoteId}
                    onCommentAdded={commentAddedHandler}
                />}
            <p>Comments...</p>
        </section>
    )
}

export default Comments