import { combineReducers } from 'redux';
import user from './user';

export default function createRootReducer() {
  return combineReducers({
    user,
  });
}
