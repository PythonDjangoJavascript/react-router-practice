import { useHistory, useLocation } from "react-router-dom"

import classes from "./QuoteList.module.css"
import QuoteItem from "./QuoteItem"

const sortQuotes = (quotes, isAscending) => {
    // returns sorted quotes

    return quotes.sort((quoteA, quoteB) => {
        if (isAscending) {
            return quoteA.id > quoteB.id ? 1 : -1
        } else {
            return quoteA.id < quoteB.id ? 1 : -1
        }
    })
}

const QuoteList = (props) => {

    const history = useHistory()
    const currLocation = useLocation()

    const queryParams = new URLSearchParams(currLocation.search)
    const isSortingAsc = queryParams.get('sort') === 'asc'

    // set ordering accorging to order from urls
    const orderdQuereys = sortQuotes(props.quotes, isSortingAsc)

    //console.log(currLocation)

    const changeSortHandler = () => {
        history.push("/quotes?sort=" + (isSortingAsc ? "desc" : "asc"))
    }

    return (
        <>
            <div className={classes.sorting}>
                <button onClick={changeSortHandler}>
                    Sort {isSortingAsc ? "Descending" : "Ascending"}
                </button>
            </div>
            <ul className={classes.list}>
                {orderdQuereys.map(quote => {
                    return (
                        <QuoteItem
                            key={quote.id}
                            id={quote.id}
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