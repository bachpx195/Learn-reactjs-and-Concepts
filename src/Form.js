import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', areaValue: "React van tue!"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.className === 'name form-control'){
            this.setState({value: event.target.value.toUpperCase()});
        } else if (event.target.className === 'intro form-control') {
            this.setState({areaValue: event.target.value});
        } else {
            console.log(event.target.className)
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        alert('A text was submitted: ' + this.state.areaValue);
        event.preventDefault();
    }


    render(){
        console.log("vi dieu tuyet voi cmn luon");
        return(
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formBasicText" >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        className="name"
                    />
                </FormGroup>
                <FormGroup controlId="formBasicText" >
                    <ControlLabel>intro</ControlLabel>
                    <FormControl
                        type="textarea"
                        value={this.state.areaValue}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        className="intro"
                    />
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

export default Form;