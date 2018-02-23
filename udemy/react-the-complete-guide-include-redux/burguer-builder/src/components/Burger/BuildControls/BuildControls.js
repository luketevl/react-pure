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
    {controls.map(item => (
      <BuildControl key={item.label} {...item} added={() => props.ingredientAdded(item.type)} removed={() => props.ingredientRemovedd(item.type)} />
    ))}
  </div>
);

export default BuildControls;