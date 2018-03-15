import React, { Component } from 'react';

class NewStarForm extends Component {
    render(){
        return(
            <div>
            <h2>This is a new star form</h2>
            <form onSubmit={this.props.handleSubmit}>
            <input placeholder="Name" value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} />
            <input placeholder="Diameter" value={this.props.newStar.diameter} onChange={this.props.handleChangeFor('diameter')} />
            <input placeholder="Population" value={this.props.newStar.population} onChange={this.props.handleChangeFor('population')} />
            {/* <button onClick={this.handleClick}>Submit New Star</button> */}
            <input type="submit" value="Submit New Star" />
            </form>
            </div>
        )
    };
}

export default NewStarForm;