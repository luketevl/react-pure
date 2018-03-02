import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import actions from '../../actions/actions';
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
     purchasable: false,
     purchasing: false,
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
  
  const queryParams = [];
  for(let i in this.state.ingredients){
    queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`);
  }
  queryParams.push(`price=${this.props.totalPrice}`);
  const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`
    });
  }

  render(){
    const disableInfo = {
      ...this.props.ingredients
    }
    console.log(this.props);
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
            ingredients={this.props.ingredients}
            totalPrice={this.props.totalPrice} />
          }
        </Modal>
        
        {this.props.ingredients ? (
          <Aux>
            <Burger ingredients={this.props.ingredients} />
            <BuildControls 
            disabled={disableInfo} 
            price={this.props.totalPrice}
            ingredientAdded={this.props.onIngredientAdded} 
            ingredientRemoved={this.props.onIngredientRemoved}
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

const mapStateToProps = state => 
// {
  // console.log(state);
  ({
    ...state.ingredients
  })
// }
const mapDispatchToProps = dispatch =>
// console.log(actions.ingredients);
  ({
    onIngredientAdded: (ingredientName) => dispatch(actions.ingredients.add(ingredientName)),
    onIngredientRemoved: (ingredientName) => dispatch(actions.ingredients.remove(ingredientName))
  })
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));