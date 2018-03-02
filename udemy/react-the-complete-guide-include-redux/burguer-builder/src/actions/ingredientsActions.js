import * as actionsTyoes from './actionsTypes';

export const add = (ingredientName) => ({
  type: actionsTyoes.ADD_INGREDIENTS,
  ingredientName
});


export const remove = (ingredientName) => ({
  type: actionsTyoes.REMOVE_INGREDIENTS,
  ingredientName
});
