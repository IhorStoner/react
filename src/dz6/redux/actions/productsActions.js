export const ADD_IN_BASKET = 'ADD_IN_BASKET';
export const REMOVE_IN_BASKET = 'REMOVE_IN_BASKET';
export const CHANGE_COUNT_PLUS = 'CHANGE_COUNT_PLUS';
export const CHANGE_COUNT_MINUS = 'CHANGE_COUNT_MINUS';
export const SET_DATA_IN_STORE = 'SET_DATA_IN_STORE';

export const addInBasket = (productId) => ({    
  type: ADD_IN_BASKET,
  payload: {
    id: productId,
  }
});

export const removeInBasket = (productId) => ({      
  type: REMOVE_IN_BASKET,
  payload: {
    id: productId,
  }
});

export const changeCountPlus = (itemId,count) => ({    
  type: CHANGE_COUNT_PLUS,
  payload: {
    id: itemId,
    count: count,
  }
});

export const changeCountMinus = (itemId,count) => ({      
  type: CHANGE_COUNT_MINUS,
  payload: {
    id: itemId,
    count: count,
  }
});