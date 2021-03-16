import { LogIn } from '../actions/types';
import data from './data';
const inistialState = {
  data : '',
  login: ''
}


export default (state = inistialState, action) => {
  switch(action.type) {
    case LogIn:
    return  {...state , data, login: action.payload.loginType, roleType:action.payload.roleType  }
    default:
    return state;
  }
}