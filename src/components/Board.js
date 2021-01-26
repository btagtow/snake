import React, { Component } from 'react'

export default class Board extends Component {
    state = {
        size: 0,
    }

    handleChange = event =>{
        event.preventDefault();
        this.setState({
            rows: parseInt(event.target.value)
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Rows: </label>
                    <input type="number" id="rows" name="rows" min="8" max="24" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

