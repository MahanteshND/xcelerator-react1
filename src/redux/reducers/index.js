import { combineReducers } from 'redux';
import DashBoardReducer from './DashBoardReducer';

export default combineReducers({
  DashBoardData : DashBoardReducer
});
