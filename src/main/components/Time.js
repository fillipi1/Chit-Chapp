import React, { Component } from 'react';

class Clock extends Component {
    state = {
        time: ''
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({time: this.time = new Date().toLocaleTimeString()})    
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                {this.state.time}
            </div>
        );
    }
}

export default Clock;
