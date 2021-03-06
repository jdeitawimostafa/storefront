
const initialState = {
    products: [
      {
        name: 'TV',
        category: 'electronics',
        price: '$699.00',
        inStock: 5,
        image: 'https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_960_720.png',
      },
      {
        name: 'Radio',
        category: 'electronics',
        description: 'bacon!!',
        price: '$99.00',
        inStock: 15,
        image: 'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png',
      },
      {
        name: 'Eggs',
        category: 'food',
        price: '$1.99',
        inStock: 12,
        image: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png',
      },
      {
        name: 'Bread',
        category: 'food',
        price: '$2.39',
        inStock: 90,
        image: 'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png',
      },
    ],
    productsToDisplay: [],
  };

  export default (state = initialState,action) => {
      let {type,payload} = action;
      console.log('state from line 40',state);
      switch (type) {
        case 'GET':
          console.log('line 41', payload);
          let targetCategory = payload.results;
          // console.log('line 45', targetCategory[0]);
          // let productsCat = payload.results[0].category;
          // let productsToDisplay = targetCategory[0].map((product) => {
          //   let filteringData = product.filter((items) => {
          //     return items.category === productsCat;
          //   })
          //   return filteringData;
          // });

          // console.log('DISPLAY PRODS', productsToDisplay);
          return { ...state, data:[...state.productsToDisplay,...targetCategory]  };
         
          // case 'GET':
          //   console.log('line 51 from products api',payload);
          //   return payload;
        default:
          return state;
      }
  }

  export const changeActiveCategory = (name) => {
    return {
      type: 'change',
      payload: name,
    };
  };

  export const add = (payload) => {
    return {
      type:'ADD_PRODUCT',
      payload,
    }
  }

  export const remove = (payload) => {
    return {
      type:'DELETE',
      payload,
    }
  }