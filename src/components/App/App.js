import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      starList: [
        {name:'Gacrux',
        diameter: 117000000},
        {name:'Fomalhaut',
        diameter: 4},
        {name:'Hadar',
        diameter: 13000000}
      ],
    }
  }

  render() {

    // const starListItemArray = this.state.starList.map((star, i) => <li key={i}>{star}</li>);
    return (
         <div>
         {this.state.starList.map((star, i) => <p key={i}>{star.name} has a diameter of {star.diameter}</p>)}
         </div>
    );
  }
}

export default App;
