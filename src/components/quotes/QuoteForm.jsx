import { useRef, useState } from 'react'
import { Prompt } from 'react-router-dom'

import classes from "./QuoteForm.module.css"
import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'

const QuoteForm = (props) => {
    const authorInputRef = useRef()
    const textInputRef = useRef()
    const [isEditing, setIsEditing] = useState(false)

    function onSubmintHandler(event) {
        event.preventDefault()

        const enteredAuthor = authorInputRef.current.value
        const enteredText = textInputRef.current.value

        props.onSubmit({ author: enteredAuthor, text: enteredText })
    }

    const finishEditingHandler = () => {
        setIsEditing(false)
    }

    const formFocusHandler = () => {
        setIsEditing(true)
    }

    return (
        <>
            <Prompt
                when={isEditing}
                message={(location) => "Are you sure you want to leave?"}
            />
            <Card>
                <form onFocus={formFocusHandler}
                    className={classes.form}
                    onSubmit={onSubmintHandler}
                >
                    {!props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}
                    <div className={classes.control}>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="text">Quote</label>
                        <textarea id="text" rows="5" ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEditingHandler} className="btn">Add Quote</button>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default QuoteForm