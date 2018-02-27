import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      orders: []
    }
  }
  componentDidMount(){
    axios.get('/orders.json')
      .then(response => {
        const fetcheOrders = [];
        for(let key in response.data){
          fetcheOrders.push({
            ...response.data[key],
            id: key
          });
        }
        console.log(response);
        this.setState({
          orders: fetcheOrders,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        })
      })
  }
  render(){
    const orders = this.state.orders.map(order => (<Order key={order.id} {...order} />));
    const compoRender = this.state.loading ? <Spinner /> : orders
    return(
      <div>
          {compoRender}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);