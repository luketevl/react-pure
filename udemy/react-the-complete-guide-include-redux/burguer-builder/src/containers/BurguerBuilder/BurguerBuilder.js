import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurguerBuilder extends Component{
  constructor(props){
    super(props);
    this.state = {
     ingredients: null,
     purchasable: false,
     purchasing: false,
     totalPrice: 4,
     loading: true,
     error: null
    }
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
    
  }


  componentDidMount(){
    axios.get('/ingredients.json').then(response => {
      this.setState({
        ingredients: response.data,
        loading: false
      })
    })
    .catch(error => this.setState({ error}))
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
      ingredients: updatedIngrediants,
    });
    this.updatePuchaseState(updatedIngrediants);

  }
  removeIngredientHandler(type){
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) return false;
    const updateCount = oldCount - 1;
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

    this.updatePuchaseState(updatedIngrediants);
  }

  updatePuchaseState(updatedIngrediants){
    const ingredients = {
      ...updatedIngrediants
    };
    const sum = Object.keys(ingredients);
    const purchasable = sum.some(item => ingredients[item] > 0);
    this.setState({
      purchasable
    })
  }

  purchaseHandler(){
    this.setState({
      purchasing: true
    })
  }
  purchaseCancelHandler(){
    this.setState({
      purchasing: false
    })
  }
  purchaseContinueHandler(){
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'lukete',
        address: {
          street: 'Nova Ponte',
          zipCode: '30550720',
          country: 'Brazil'
        },
        email: 'lukete@gmail.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
        console.log(response);
      }).catch(err => {
          this.setState({loading: false, purchasing: false});
          console.log(err)
        }
      );
  }

  render(){
    const disableInfo = {
      ...this.state.ingredients
    }

    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={() => this.purchaseCancelHandler}>
        { this.state.loading
        ? <Spinner />
        : <OrderSummary 
            purchaseCancelled={() => this.purchaseCancelHandler}
            purchaseContinued={() => this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice} />
          }
        </Modal>
        
        {this.state.ingredients ? (
          <Aux>
            <Burger {...this.state}/>
            <BuildControls 
            disabled={disableInfo} 
            price={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler} 
            ingredientRemoved={this.removeIngredientHandler}
            purchasable={this.state.purchasable}
            ordered={() => this.purchaseHandler()}
            />
          </Aux> )
          : <p>Ingredients cant be loaded!</p>
        }
      </Aux>
    );
  }
}

export default withErrorHandler(BurguerBuilder, axios);