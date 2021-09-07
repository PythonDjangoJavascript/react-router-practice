import { useParams } from "react-router-dom"


const QuoteDetail = () => {
    const params = useParams()

    return (
        <div>
            <h1>Quote Detail</h1>
            <p>Quote Id: {params.quoteId}</p>
        </div>
    )
}
export default QuoteDetail