import { useEffect } from "react"
import NoQuotesFound from "../components/quotes/NoQuotesFound"
import QuoteList from "../components/quotes/QuoteList"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import useHttp from "../hooks/use-http"
import { getAllQuotes } from "../lib/api"

// const DUMMY_QUOTES = [
//     { id: "q1", author: "Sayed", text: "Coding is fun" },
//     { id: "q2", author: "Nuruddin", text: "Django is fun" },
//     { id: "q3", author: "Sayed", text: "React is fun" },
// ]

const AllQuotes = () => {
    const { executeRequest, status, data: loadedQuotes, error } = useHttp(
        getAllQuotes,
        true
    )

    useEffect(() => {
        executeRequest()
    }, [executeRequest])

    if (status === "pending") {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes