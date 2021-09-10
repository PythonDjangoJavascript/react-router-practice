import { useParams } from "react-router-dom"
import { Route } from "react-router-dom"
import Comments from "../components/comments/Comments"


const QuoteDetail = () => {
    const params = useParams()

    return (
        <div>
            <h1>Quote Detail</h1>
            <p>Quote Id: {params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}
export default QuoteDetail