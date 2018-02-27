import React, { Component } from 'react';
import classes from './Order.css';
const Order = props => {
  const ingredients = [];
  for(let ingredientName in props.ingredients){
    ingredients.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      }
    );
  }

  return (
    <div className={classes.Order}>
      <p>Ingredients:</p>
      {ingredients.map(ingredient => (
        (
          <span className={classes.Ingredient}
          key={ingredient.name}> {ingredient.name}({ingredient.amount})</span>
        )
      ))}
      <p>Price <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default Order;