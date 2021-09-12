import { useRef } from 'react'

import classes from "./QuoteForm.module.css"
import Card from '../UI/Card'

const QuoteForm = (props) => {
    const authorInputRef = useRef()
    const textInputRef = useRef()

    function onSubmintHandler(event) {
        event.preventDefault()

        const enteredAuthor = authorInputRef.current.value
        const enteredText = textInputRef.current.value

        props.onSubmit({ author: enteredAuthor, text: enteredText })
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmintHandler}>
                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" ref={authorInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Quote</label>
                    <textarea id="text" rows="5" ref={textInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button className="btn">Add Quote</button>
                </div>
            </form>
        </Card>
    )
}

export default QuoteForm