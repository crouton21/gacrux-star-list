import React, { Component } from 'react';

class CurrentNewStar extends Component {
    render(){
        return(
            <div>
            <h2>This is a current new star</h2>
            <p>New star is {this.props.newStar.name} and has diameter {this.props.newStar.diameter} and has a population of {this.props.newStar.population}.</p>
            </div>
        )
    };
}

export default CurrentNewStar;