import {AUTH_USER, IS_AUTH} from '../../utils/consts';

const defaultState = {
  isAuth: false,
  user: {}
};


const userStore =(state = defaultState, action)=>{
  switch(action.type){
    case AUTH_USER:
      return {
        ...state,
        ...action.payload
    }
    case IS_AUTH:
      return {
        ...state,
        ...action.payload
    }
    default:
      return state;
  }
};

export default userStore;