import { Link } from "react-router-dom"


const Product = () => {
    return (
        <section>
            <h1>Product List React Router page</h1>
            <ul>
                <li><Link to="/products/p1">Laptop</Link></li>
                <li><Link to="/products/p2">Mobile Phone</Link></li>
                <li><Link to="/products/p3">Monitor</Link></li>
            </ul>
        </section>
    )
}

export default Product