import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]
const BuildControls = props => (
  <div className={classes.BuildControls}>
  <p>Current Price <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(item => (
      <BuildControl disabled={props.disabled[item.type]} key={item.label} {...item} added={() => props.ingredientAdded(item.type)} removed={() => props.ingredientRemoved(item.type)} />
    ))}
    <button onClick={props.ordered} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
  </div>
);

export default BuildControls;