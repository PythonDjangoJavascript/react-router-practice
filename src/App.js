import { Route, Switch, Redirect } from "react-router";

import Welcome from "./pages/Welcome";
import Product from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>

          {/* for quotoe paths */}
          <Route path="/quotes">
            <h1>Quotes</h1>
          </Route>
          <Route path="/quote/:quoteId "></Route>
          <Route path="/new-quote"></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
