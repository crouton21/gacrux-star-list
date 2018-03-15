import React, { Component } from 'react';

class StarList extends Component {
    render(){
        return(
            <div>
            <h2>This is the star list:</h2>
            <div>{this.props.starList.map((star, i) => <p key={i}>The star {star.name} has a diameter of {star.diameter} million kilometers and a population of {star.population}.</p>)}</div>
            </div>
        )
    };
}

export default StarList;



