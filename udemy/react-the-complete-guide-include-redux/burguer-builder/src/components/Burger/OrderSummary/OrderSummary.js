import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

export default class OrderSummary extends Component {
  render(){
    const ingredientsSummary = Object.keys(this.props.ingredients)
    .map( igKey => (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {igKey}
          
        </span>
        : {this.props.ingredients[igKey]}
      </li>
    ))
  return (
    <Aux>
      <h3>Yout order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      
      <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
  }
}