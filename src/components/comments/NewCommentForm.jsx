import { useRef } from "react"
import classes from "./NewCommentForm.module.css"

const NewCommentForm = () => {

    const commentTextRef = useRef()

    const formSubHandler = (event) => {
        event.preventDefault()
    }

    return <form className={classes.form} onSubmit={formSubHandler}>
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