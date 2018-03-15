import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      starList: ['Gacrux', 'Hadar', 'Fomalhaut'],
    }
  }

  render() {
    const starListItemArray = this.state.starList.map((star, i) => <li key={i}>{star}</li>);
    return (
        <ul>{starListItemArray}</ul>
    );
  }
}

export default App;
