import classes from "./QuoteList.module.css"
import QuoteItem from "./QuoteItem"

const QuoteList = (props) => {
    return (
        <>
            <ul className={classes.list}>
                {props.quotes.map(quote => {
                    return (
                        <QuoteItem
                            key={quote.id}
                            author={quote.author}
                            text={quote.text}
                        />
                    )
                })}
            </ul>
        </>
    )
}

export default QuoteList