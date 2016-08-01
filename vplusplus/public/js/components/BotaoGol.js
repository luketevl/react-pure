import React from 'react';

export default class Partida extends React.Component{

  handleClick(evt){
    evt.preventDefault();
    this.props.marcarGol();
  }

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>Gol!!</button>
      </div>
        );
  }
}
