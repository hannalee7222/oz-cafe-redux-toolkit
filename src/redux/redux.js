import { combineReducers, legacy_createStore } from 'redux';
import data from '../assets/data';

export const addToCart = ({ options, quantity, id }) => {
  return {
    type: 'addToCart',
    payload: { options, quantity, id },
  };
};

export const removeFromCart = (id) => {
  return {
    type: 'removeFromCart',
    payload: { id },
  };
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'addToCart':
      console.log('장바구니 추가됨:', action.payload);
      return [...state, action.payload];
    case 'removeFromCart':
      return state.filter((el) => action.payload.id !== el.id);
    default:
      return state;
  }
};

const menuReducer = (state = data.menu, action) => {
  return state;
};

const rootReducer = combineReducers({ cartReducer, menuReducer });

export const store = legacy_createStore(rootReducer);
