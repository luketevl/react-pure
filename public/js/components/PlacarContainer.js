import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component{

  constructor(){
    super();
    this.state = {
      gols_casa: 0,
      gols_visitante: 0,
    };
  }

  margarGolCasa(){
    this.setState({
      gols_casa: this.state.gols_casa +1
    });
  }

  margarGolVisitante(){
    this.setState({
      gols_visitante: this.state.gols_visitante +1
    });
  }
  render(){
    const { partida, casa, visitante } = this.props;
    console.log(visitante);
    return (
      <div>
        <div style={{float: "left", "marginRight": "50px"}}>
          <h3>Casa</h3>
          <Time nome={casa.nome} marcarGol={this.margarGolCasa.bind(this)} gols={this.state.gols_casa} />
        </div>
        <div style={{float: "left", "marginRight": "50px"}}>
          <Partida {...partida} />
        </div>
        <div style={{float: "left", "marginRight": "50px"}}>
        <h3>Visitante</h3>
          <Time nome={visitante.nome} marcarGol={this.margarGolVisitante.bind(this)} gols={this.state.gols_visitante} />
        </div>
      </div>
        );
  }
}

PlacarContainer.propTypes = {
  gols: React.PropTypes.number.isRequired,
};

PlacarContainer.defaultProps = {
  gols: 0
};
