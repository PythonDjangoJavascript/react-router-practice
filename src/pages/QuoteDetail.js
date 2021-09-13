import { useParams } from "react-router-dom"
import { Route, Link, useRouteMatch } from "react-router-dom"
import Comments from "../components/comments/Comments"
import SelectedQuote from "../components/quotes/SelectedQuote"


const DUMMY_QUOTES = [
    { id: "q1", author: "Sayed", text: "Coding is fun" },
    { id: "q2", author: "Nuruddin", text: "Django is fun" },
    { id: "q3", author: "Sayed", text: "React is fun" },
]

const QuoteDetail = () => {
    const params = useParams()
    const match = useRouteMatch()

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!quote) {
        return <SelectedQuote text="No Quote Found" />
    }

    return (
        <div>
            <SelectedQuote
                author={quote.author}
                text={quote.text}
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