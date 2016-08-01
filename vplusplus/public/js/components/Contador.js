import React from 'react';

export default class Contador extends React.Component{

  constructor(){
    super();
    this.state = {
      contador: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(){
    this.setState({
      contador: this.state.contador + 1
    });
  }
  decrement(){
    this.setState({
      contador: this.state.contador - 1
    });
  }
  render(){
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}
