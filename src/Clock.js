import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(), count: 1}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () =>
                this.tick(),
            1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
            count: this.state.count + this.props.sth
        });
    }

    render(){
        // console.log("thiet la vi dieu");
        return(
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <p>{this.state.count}</p>
                <p>{this.props.sth}</p>
            </div>
        )
    }
}