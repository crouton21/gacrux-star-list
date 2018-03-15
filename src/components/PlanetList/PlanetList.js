import React, { Component } from 'react';

class PlanetList extends Component {
    render(){
        return(
            <div>
            <h2>Planet List:</h2>
            {this.props.planetList.map((planet, i) => <p key={i}>{planet.name}</p>)}
            </div>
        )
    };
}

export default PlanetList;