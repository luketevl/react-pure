import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
export default class Checkout extends Component{
  constructor(props){
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 0
    }
    this.checkoutCancelledHandler    = this.checkoutCancelledHandler.bind(this);
    this.checkoutContinuedHandler  = this.checkoutContinuedHandler.bind(this);
    
  }
  componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for(let param of query.entries()){
      if(param[0] === 'price'){
        price = param[1];
        continue;
      } 
      ingredients[param[0]] = +param[1];
    }
    this.setState({
      ingredients,
      totalPrice: price
    });


  }
  checkoutCancelledHandler(){
    this.props.history.goBack();
  }
  checkoutContinuedHandler(){
    this.props.history.replace('/checkout/contact-data');
  }
  render(){
    return(
      <div className>
        <CheckoutSummary 
        checkoutCancelledHandler={() => this.checkoutCancelledHandler}
        checkoutContinuedHandler={() => this.checkoutContinuedHandler}
        ingredients={this.state.ingredients}/>

        <Route path={this.props.match.path +'/contact-data'} render={(props) => <ContactData price={this.state.totalPrice} ingredients={this.state.ingredients} {...props} />} />
      </div>
    );
  }
}