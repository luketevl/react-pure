import React, {  Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Aux/Aux';
import Input from '../../../components/UI/Input/Input';

export default class ContactData extends Component{
  constructor(props){
    super(props);
    this.state = {
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig:{
            type: 'text',
            placeholder: 'Your Name'
          },
          value: '',
        },
        street: {
          elementType: 'input',
          elementConfig:{
            type: 'text',
            placeholder: 'Your Street'
          },
          value: '',
        },
        zipCode: {
          elementType: 'input',
          elementConfig:{
            type: 'text',
            placeholder: 'Your ZipCode'
          },
          value: '',
        },
        country: {
          elementType: 'input',
          elementConfig:{
            type: 'text',
            placeholder: 'Country'
          },
          value: '',
        },
        email: {
          elementType: 'input',
          elementConfig:{
            type: 'email',
            placeholder: 'Your E-mail'
          },
          value: '',
        },
        deliveryMethod: {
          elementType: 'select',
          elementConfig:{
            options:[
              {
                value: 'fastest',
                displayValue: 'Fastest'
              },
              {
                value: 'cheapest',
                displayValue: 'Cheapest'
              },
              {
                value: 'free',
                displayValue: 'Free'
              },
            ]
          },
          value: '',
        },
      },
      loading: false
    };
    this.orderHandler = this.orderHandler.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);

  }

  orderHandler(event){
    event.preventDefault();

    const formData = {};
    for(let formElementIdentifier in this.state.orderForm){
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    console.log(2,formData);
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
      
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.replace('/')
        console.log(response);
      }).catch(err => {
          this.setState({loading: false});
          console.log(err)
        }
      );
  }

  inputChangedHandler(event, inputIdentify){
    const updateOrderForm = {
      ...this.state.orderForm
    }

    const updateFormElement = {
      ...updateOrderForm[inputIdentify],
      value: event.target.value
    }
    
    updateOrderForm[inputIdentify] = updateFormElement;
    this.setState({
      orderForm: updateOrderForm
    })
  }
  render(){
    const fields = [];

    for(let key in this.state.orderForm){
      console.log(key);
      fields.push({
        id: key,
        config: this.state.orderForm[key],
      })
    }
    console.log(fields);
    return(
      <Aux>
        {this.state.loading ?
          <Spinner />
          :
          <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            <form onSubmit={this.orderHandler}>

              {fields.map(element => (
                <Input 
                key={element.id}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                changed={event => this.inputChangedHandler(event, element.id)}
                 />
              ))}
              <Button btnType="Success" clicked={()=>{}}>ORDER</Button>
            </form>
          </div>
        }
      </Aux>
    )
  }
}