import QuoteForm from "../components/quotes/QuoteForm"

const NewQuote = () => {

    const onSubmit = (newQuote) => {
        console.log(newQuote)
    }

    return <QuoteForm onSubmit={onSubmit} />
}

export default NewQuote