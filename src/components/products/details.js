import React from 'react';
import { getData } from "../../store/products";
import { useSelector } from 'react-redux';

const Details = (props)=>{
    const state = useSelector((state) => {
        return { productReducer: state.productReducer }
    });
    console.log(' mostafaaaaaaa', state);
 return (
     <div>
   <h1>mostafa</h1>
     </div>
 )
}
export default Details;