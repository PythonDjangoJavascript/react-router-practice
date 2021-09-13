import { Route, Switch, Redirect } from "react-router";

import Welcome from "./pages/Welcome";
import Product from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
// import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <>
      {/* <MainHeader /> */}
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
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
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
