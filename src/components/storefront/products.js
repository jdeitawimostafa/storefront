import React from 'react';
// import { connect } from 'react-redux';
import {add} from '../../store/products';
import { Button } from '@material-ui/core';
import { useSelector , useDispatch } from 'react-redux';
import { hitApi } from '../../store/categories';
import Link from 'react-router-dom';

const Products = (props) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {todos:state.products}
  });
  console.log('line 11 from products state api',state);
  // console.log('line 12 from products state api',state.todos.results);
  const dataFromApi = state.todos.data;
  console.log('line 14 data from api',dataFromApi);

  if(dataFromApi){return (
    <>
    <section>
      {
        dataFromApi.map((pro) => {
          return(
            <div>
              <ul> 
            <li>ProductName : {pro.name} , Price : {pro.price} , category : {pro.category} </li>
            <Button component={Link} to='/detail' onClick={()=> {dispatch(hitApi(pro.id))}} variant="contained"
        color="primary" size="large" >View Details </Button>
            {/* <Button variant="text" onClick={() => props.add(pro)} key={pro.price} >Add To Cart</Button> */}
              </ul>
            </div>
          )
        })
      }
    </section>
    </>
  
  )
    }
    else {
      return '';
    }
  // if(props.productsToDisplay.length > 0){ return (
  //   <div>
  //     <h2>A list of all my cool products:</h2>
  //     <ul>
  //       {props.productsToDisplay.map((product) => {
  //         return (
  //           <div key={product.name}>
  //             <li key={product.name}>
  //             <Button variant="text" onClick={() => props.add(product)} key={product.price} >Add To Cart</Button>
  //               <strong> {product.name} </strong>
  //               <span key={product.price}> {product.price}</span>
  //             </li>
  //           </div>
  //         );
  //       })}
  //     </ul>
      
  //   </div>
  // );
  //     }
  //     else {
  //       return '';
  //     }
};


// const mapStateToProps = (state) => {
//   return {
//     products: state.products.products,
//     productsToDisplay: state.products.productsToDisplay,
//   };
// };

// const mapDispatchToProps = {add}

export default (Products);
