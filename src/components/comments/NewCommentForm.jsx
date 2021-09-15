import { useEffect, useRef } from "react"
import classes from "./NewCommentForm.module.css"

import useHttp from "../../hooks/use-http"
import { addComment } from "../../lib/api"
import LoadingSpinner from "../UI/LoadingSpinner"

const NewCommentForm = (props) => {
    const { executeRequest, status, error } = useHttp(addComment)
    const commentTextRef = useRef()

    const { onCommentAdded } = props

    useEffect(() => {
        if (status === "completed" && !error) {
            onCommentAdded()
            commentTextRef.current.value = ""
        }
    }, [status, error, onCommentAdded])

    const formSubHandler = (event) => {
        event.preventDefault()

        executeRequest({ comment: { text: commentTextRef.current.value }, quoteId: props.quoteId })
    }

    return <form className={classes.form} onSubmit={formSubHandler}>
        {status === "pending" && (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )}
        <div className={classes.control} onSubmit={formSubHandler}>
            <label htmlFor="comment">Your Comment</label>
            <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button className="btn">Add Comment</button>
        </div>
    </form>
}
export default NewCommentForm