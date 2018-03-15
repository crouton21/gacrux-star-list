import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import PlanetList from '../PlanetList/PlanetList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newStar: {
        name: '',
        diameter: '',
        population: '',
      },
      starList: [
        {name:'Gacrux',
        diameter: 117,
        population: 0},
        {name:'Fomalhaut',
        diameter: .0000004,
        population: 0},
        {name:'Hadar',
        diameter: 13,
        population: 0}
      ],
      planetList:[],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFor = this.handleChangeFor.bind(this);
  }

  getPlanets(){
    axios.get('https://swapi.co/api/planets/?format=json')
    .then(response => {
      this.setState({
        planetList: response.data.results
      })
      console.log(this.state.planetList);
    }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount(){ //like onReady in jQuery
    //this is where we make our request.
    this.getPlanets();
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({ 
      newStar:{
      ...this.state.newStar,
      [propertyName]: event.target.value,
      }
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      starList:[
        ...this.state.starList, this.state.newStar
      ],
      newStar: {name: '', diameter:'', population: ''}
    })
    
    console.log('In handleClick, starList:', this.state.starList, 'newStar:', this.state.newStar);
  }

  render() {
    // const starListItemArray = this.state.starList.map((star, i) => <li key={i}>{star}</li>);
    return (
      <div>
          <CurrentNewStar newStar={this.state.newStar} />
          <NewStarForm newStar = {this.state.newStar} handleSubmit={this.handleSubmit} handleChangeFor = {this.handleChangeFor} />
          <StarList starList = {this.state.starList}/>
          <PlanetList planetList={this.state.planetList}/>
         </div>
    );
  }
}

export default App;
