import superagent from 'superagent';

const initialState = {
    categories:[
        {
            name:'electronics',
            displayName:'ELECTRONIC',
            description:'tv'
        },
        {
            name:'food',
            displayName:'FOOD',
            description:'rice'
        },
    ],

    activeCategory:''
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        // case 'change':
        case 'GET':
          let activeCategory = payload;
          payload.results.map(singleProduct => {
         return singleProduct.category;
          })
          let description = state.categories[0].description;
          console.log('ACTIVE CATEGORY: ', activeCategory);
          return {categories:state.categories,active:activeCategory,description:description}
        default:
          return state;
      }
};



export const getData = (payload) => {
    return {
        type:'GET',
        payload,
    }
}

export function hitApi(name){
    const urlApi = `https://api-js401.herokuapp.com/api/v1/products?category=${name}`;
  return (dispatch) => {
    superagent.get(urlApi).then((res) => {
      dispatch(getData(res.body));
    })
  }
}
