import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"

const NewQuote = () => {

    const history = useHistory()

    const onSubmit = (newQuote) => {
        console.log(newQuote)

        history.push("/quotes")
    }

    return <QuoteForm onSubmit={onSubmit} />
}

export default NewQuote