import data from '../../data.json';
import { ADD_IN_BASKET, REMOVE_IN_BASKET,CHANGE_COUNT_MINUS,CHANGE_COUNT_PLUS } from '../actions/productsActions'
import { loadLocal } from '../../helpers/localStorage'

const initialState = {
  products: data.razorBlades,
  basket: loadLocal('basket'),
};

export const productsReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_IN_BASKET : return {
      products : [...state.products],
      basket: state.basket.find((item) => item.id === action.payload.id ? item.count++ : null) 
      ? 
        [...state.basket] 
      :
        [...state.basket].concat(
          {
            id: action.payload.id,
            count: 1,
          }
        )
    };
    case REMOVE_IN_BASKET: return {
      products: [...state.products],
      selectedProduct: state.basket.find(item => item.id === action.payload.id),
      basket: state.basket.filter(product => product.id !== action.payload.id)
    }
    case CHANGE_COUNT_PLUS: return {
      products: [...state.products],
      basket: state.basket.filter(product => product.id !== action.payload.id).concat({
        id: action.payload.id,
        count: action.payload.count + 1,
      })
    }
    case CHANGE_COUNT_MINUS: return {
      products: [...state.products],
      basket: 
        action.payload.count <= 1 
        ? state.basket.filter(product => product.id !== action.payload.id) 
        : state.basket.filter(product => product.id !== action.payload.id).concat(
        {
          id: action.payload.id,
          count: action.payload.count - 1,
        })
    }
    default: return state
  }
};