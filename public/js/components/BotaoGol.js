import React from 'react';

export default class Partida extends React.Component{

  handleClick(evt){
    evt.preventDefault();
    this.props.marcarGol();
  }

  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Gol!!</button>
      </div>
        );
  }
}
