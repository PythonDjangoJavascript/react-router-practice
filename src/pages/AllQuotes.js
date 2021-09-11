import QuoteList from "../components/quotes/QuoteList"

const DUMMY_QUOTES = [
    { id: "q1", author: "Sayed", text: "Coding is fun" },
    { id: "q2", author: "Nuruddin", text: "Django is fun" },
    { id: "q3", author: "Sayed", text: "React is fun" },
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes