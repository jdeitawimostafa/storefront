import React from 'react';
import Header from './components/header/header';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer  from './components/footer/footer';
import Categories from './components/storefront/categories';
import Product from './components/storefront/products';
import CurrentCategory from './components/storefront/current-category';
import Simplecart from './components/cart/simplecart';
import {Paper} from '@material-ui/core';
import './app.scss';

function App() {
  return (
    <Router>
      <React.Fragment>
    <div className="App">
      <div className="header">
    <Paper variant="outlined"> 
        <Header className="App-header"/>
        <Simplecart/>
        </Paper>
      </div>
        <Switch>
          <Route exact path = "/">
          </Route>
        </Switch>
        <h1>Browse our Categories</h1>
        <Categories/>
        <CurrentCategory/>
        <Product/>
        <Paper variant="outlined"> 
      <Footer/>
        </Paper>
    </div>
    </React.Fragment>
     </Router>
  );
}
export default App;
