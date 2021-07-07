const initialState = {
    cartArray:[],
    totalProducts:0,
}


const cartReducer =  (state = initialState,action) => {
    let {type,payload} = action;
    let cartArray = [...state.cartArray];
    console.log('line 10 from cart',cartArray);
    console.log('line 11 from cart',payload);
    switch (type) {
        case 'ADD_PRODUCT':
            if(!cartArray.includes(payload.name)){
            cartArray.push(payload.name);
            }
            console.log('line 17',payload.name);
            console.log('line 18 return statment',{...state,cartArray,totalProducts:cartArray.length});
            return{...state,cartArray,totalProducts:cartArray.length};
        case 'DELETE':
        cartArray = cartArray.filter((item) =>item !== payload && item);
        console.log('line 22',cartArray);
        return {...state,cartArray,totalProducts:cartArray.length};
        default:
            return state;
    }
}

export default cartReducer;

