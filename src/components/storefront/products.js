import React from 'react';
import { connect } from 'react-redux';
import {add} from '../../store/products';
import { Button } from '@material-ui/core';

const Products = (props) => {
  if(props.productsToDisplay.length > 0){ return (
    <div>
      <h2>A list of all my cool products:</h2>
      <ul>
        {props.productsToDisplay.map((product) => {
          return (
            <div key={product.name}>
              <li key={product.name}>
              <Button variant="text" onClick={() => props.add(product)} key={product.price} >Add To Cart</Button>
                <strong> {product.name} </strong>
                <span key={product.price}> {product.price}</span>
                <img src={product.image} alt={product.name} height='40' width='40'></img>
              </li>
            </div>
          );
        })}
      </ul>
      
    </div>
  );
      }
      else {
        return '';
      }
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    productsToDisplay: state.products.productsToDisplay,
  };
};

const mapDispatchToProps = {add}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
