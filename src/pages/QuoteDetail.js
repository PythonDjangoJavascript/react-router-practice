import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Route, Link, useRouteMatch } from "react-router-dom"

import Comments from "../components/comments/Comments"
import SelectedQuote from "../components/quotes/SelectedQuote"
import LoadingSpinner from "../components/UI/LoadingSpinner"

import useHttp from "../hooks/use-http"
import { getQuoteDetail } from "../lib/api"


// const DUMMY_QUOTES = [
//     { id: "q1", author: "Sayed", text: "Coding is fun" },
//     { id: "q2", author: "Nuruddin", text: "Django is fun" },
//     { id: "q3", author: "Sayed", text: "React is fun" },
// ]

const QuoteDetail = () => {
    const params = useParams()
    const match = useRouteMatch()
    const { executeRequest, status, data: loadedQuote, error } = useHttp(
        getQuoteDetail,
        true
    )

    // using object destructring as quoteId is going to use as dependency
    // in useEffect
    const { quoteId } = params

    useEffect(() => {
        executeRequest(quoteId)
    }, [executeRequest, quoteId])

    //const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className="centered">
            {error}
        </p>
    }

    if (!loadedQuote.text) {
        return <SelectedQuote text="No Quote Found" />
    }

    return (
        <div>
            <SelectedQuote
                author={loadedQuote.author}
                text={loadedQuote.text}
            />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}
export default QuoteDetail