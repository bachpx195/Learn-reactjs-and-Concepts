import React, { Component } from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}


export default class HandleEvent extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true, showWarning: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleClickTest = this.handleClickTest.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            showWarning: !prevState.showWarning
        }));
    }

    handleClickTest(){
        console.log('this is:', this);
    }

    render(){
        return(<div>
            <WarningBanner warn={this.state.showWarning} />
            <a onClick={(e) => this.handleClickTest(e)}>
                Click me
            </a>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>)
    }
}

