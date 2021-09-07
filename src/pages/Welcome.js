import { Route } from "react-router"


const Welcome = () => {
    return (
        <section>
            <h1>Welcome to React Router page</h1>
            <Route path="/welcome/user">
                <p>Welcome User</p>
            </Route>
        </section>
    )
}

export default Welcome