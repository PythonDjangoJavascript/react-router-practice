import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"

import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api"

const NewQuote = () => {

    const { executeRequest, status } = useHttp(addQuote)
    const history = useHistory()

    useEffect(() => {
        if (status === "completed") {
            history.push("/quotes")
        }
    }, [status, history])

    const onSubmit = (newQuote) => {
        executeRequest(newQuote)
    }

    return <QuoteForm isLoading={status === "pending"} onSubmit={onSubmit} />
}

export default NewQuote
