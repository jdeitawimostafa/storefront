import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../../store/products';
import { Button } from '@material-ui/core';

const Cart = (props) => {
    let cartProducts = props.arrayOfProducts;
    console.log('line 7 from simple',cartProducts);
    return(
        <>
        
        {/* <button><span>Cart ({props.total})</span></button> */}
        <Button variant="contained">Cart ({props.total})</Button>
        <ul>
            {
                cartProducts.length ? cartProducts.map((prod,idx) => {
                    return(
                        <li key={idx}>
                            <span>{prod}</span>
                            <button onClick={() => props.remove(prod)} >
                            {' '}
                            X{' '}
                            </button>
                        </li>
                    );
                }) : ''
            }
        </ul>
        </>
    )
}


const mapStateToProps = (state) => {
    return{
        total:state.cartReducer.totalProducts,
        arrayOfProducts:state.cartReducer.cartArray,
    }
}


const mapDispatchToProps = {remove};

export default connect (mapStateToProps,mapDispatchToProps)(Cart);
