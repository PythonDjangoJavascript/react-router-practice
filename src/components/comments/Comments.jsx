import { useState } from "react"
import classes from "./Coments.module.css"
import NewCommentForm from "./NewCommentForm"


const Comments = () => {

    const [isAddingComment, setIsAddingComment] = useState(false)

    // setting loading state to add comment
    const addLoadingCommentHandler = () => {
        setIsAddingComment(true)
    }

    return (
        <section className={classes.comments}>
            <h1>User Comments</h1>
            {!isAddingComment && (
                <button className='btn' onClick={addLoadingCommentHandler}>
                    Add Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm />}
            <p>Comments...</p>
        </section>
    )
}

export default Comments