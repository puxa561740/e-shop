import {AUTH_USER, IS_AUTH} from '../../utils/consts';

const defaultState = {
  type: [
    {id:1, name:'refregirators'},
    {id:2, name:'smartpones'}
  ],
  brands: [
    {id:1, name:'Samsung'},
    {id:2, name:'LG'}
  ],
  device: [
    {id:1, name:'note 8 Pro', price: 200000, rating: 4, img: 'https://static.1k.by/images/products/ip/big/pp3/f/3817301/ia42422fa7.jpg'},
    {id:2, name:'note 8 Pro', price: 200000, rating: 4, img: 'https://static.1k.by/images/products/ip/big/pp3/f/3817301/ia42422fa7.jpg'},
    {id:3, name:'note 8 Pro', price: 200000, rating: 4, img: 'https://static.1k.by/images/products/ip/big/pp3/f/3817301/ia42422fa7.jpg'},
    {id:4, name:'note 8 Pro', price: 200000, rating: 4, img: 'https://static.1k.by/images/products/ip/big/pp3/f/3817301/ia42422fa7.jpg'},
    {id:5, name:'note 8 Pro', price: 200000, rating: 4, img: 'https://static.1k.by/images/products/ip/big/pp3/f/3817301/ia42422fa7.jpg'},
  ]
};


const deviceStore =(state = defaultState, action)=>{
  switch(action.type){
    case AUTH_USER:
      return {
        ...state,
        ...action.payload
    }
    default:
      return state;
  }
};

export default deviceStore;