import React from 'react';

import PlacarContainer from './PlacarContainer';

let dados = {
  partida: {
    estadio: "Maraca",
    data: '01/01/2018',
    horario: '19:00'
  },
  casa:{
    nome: "Galo"
  },
  visitante:{
    nome: "Cru"
  }
};

export default class App extends React.Component {

  render(){
    return <PlacarContainer {...dados} />
  }
}
