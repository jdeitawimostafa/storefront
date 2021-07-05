import React from 'react';
import { connect } from 'react-redux';


const Products = (props) => {
  return (
    <div>
      <h2>A list of all my cool products:</h2>
      <ul>
        {props.productsToDisplay.map((product) => {
          return (
            <div key={product.name}>
              <li key={product.name}>
                <strong> {product.name} </strong>
                <span key={product.price}> {product.price}</span>
                <span key={product.inStock}> {product.inStock}</span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    productsToDisplay: state.products.productsToDisplay,
  };
};

export default connect(mapStateToProps)(Products);