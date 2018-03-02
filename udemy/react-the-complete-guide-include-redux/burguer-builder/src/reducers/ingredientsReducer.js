import * as actionsTyoes from '../actions/actionsTypes';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4,
}
const ingredientsReducer = (state = initialState, action) => {
  const newState = {
                    ...state,
                    ingredients: {
                      ...state.ingredients
                    }
                  };
                  switch (action.type) {
                    case actionsTyoes.ADD_INGREDIENTS:
                    newState.ingredients[action.ingredientName] = newState.ingredients[action.ingredientName] + 1;
    break;
    case actionsTyoes.REMOVE_INGREDIENTS:
    newState.ingredients[action.ingredientName] -= 1;
    break;
    
    default:
    break;
  }
  
  console.log(newState.ingredients[action.ingredientName], newState, action);
  return newState;
}
export default ingredientsReducer;