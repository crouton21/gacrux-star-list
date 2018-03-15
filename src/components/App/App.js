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
    // function objectToStarName(eachStarObject){
    //   return eachStarObject.name;
    // }
    // function objectToStarDiameter(eachStarObject){
    //   return eachStarObject.diameter;
    // }
    // starNameArray.forEach(star => {
    //   const newName = objectToStarName(star);
    // })
    // starDiameterArray.forEach(star => {
    //   const newDiameter = objectToStarDiameter(star);
    // })
    // const starListItemArray = this.state.starList.map((star, i) => <li key={i}>{star}</li>);
    return (
         <div>
         {this.state.starList.map((starList, i) => <p key={i}>{starList.name} has a diameter of {starList.diameter}</p>)}

         </div>
    );
  }
}

export default App;
