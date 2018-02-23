import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

export default class BurguerBuilder extends Component{
  constructor(props){
    super(props);
    this.state = {
     ingredients: {
       salad: 0,
       bacon: 0,
       cheese: 0,
       meat: 0
     },
     totalPrice: 4
    }
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
  }

  addIngredientHandler(type){
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount +1;
    const updatedIngrediants = {
      ...this.state.ingredients,
    }
    updatedIngrediants[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrediants
    })

  }
  removeIngredientHandler(type){
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount +1;
    const updatedIngrediants = {
      ...this.state.ingredients,
    }
    
    updatedIngrediants[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrediants
    })
  }
  render(){
    return(
      <Aux>
        <Burger {...this.state}/>
        <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.addIngredientHandler}/>
      </Aux>
    );
  }
}