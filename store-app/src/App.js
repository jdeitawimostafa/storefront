import React from 'react';
import Header from './components/header/header';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer  from './components/footer/footer';
import Categories from './components/storefront/categories';
import Product from './components/storefront/products';
import CurrentCategory from './components/storefront/current-category';

function App() {
  return (
    <Router>
      <React.Fragment>
    <div className="App">
        <Header className="App-header"/>
        <Switch>
          <Route exact path = "/">
          </Route>
        </Switch>
        <h1>Browse our Categories</h1>
        <CurrentCategory/>
        <Categories/>
        <Product/>
      <Footer/>
    </div>
    </React.Fragment>
     </Router>
  );
}
export default App;