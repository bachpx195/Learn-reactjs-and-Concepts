import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import HandleEvent from './HandleEvent';
import { Tabs, Tab } from 'react-bootstrap';
import ListAndKey from './listAndKey'
import Form from './Form'


class App extends Component {
    render() {
        const arr = [1,2,4,5];

        let comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'http://placekitten.com/g/64/64'
            }
        }

        function formatDate(date) {
            return date.toLocaleDateString();
        }

        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

        function Avatar(props) {
            return (
                <img className="Avatar"
                     src={props.user.avatarUrl}
                     alt={props.user.name}/>
            );
        }

        function UserInfo(props) {
            return (
                <div className="UserInfo">
                    <Avatar user={props.user}/>
                    <div className="UserInfo-name">
                        {props.user.name}
                    </div>
                </div>
            );
        }

        function Comment(props) {
            return (
                <div className="Comment">
                    <UserInfo user={props.author}/>
                    <div className="Comment-text">
                        {props.text}
                    </div>
                    <div className="Comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            );
        }

        const tabsInstance = (
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Hello Word">
                    <h1>Hello, world!</h1>
                </Tab>
                <Tab eventKey={2} title="Welcome">
                    <Welcome name="bach"/>
                    <Welcome name="skyy"/>
                </Tab>
                <Tab eventKey={3} title="Clock">
                    <Clock sth={1}/>
                </Tab>
                <Tab eventKey={4} title="Comment">
                    <Comment
                        date={comment.date}
                        text={comment.text}
                        author={comment.author}/>
                </Tab>
                <Tab eventKey={5} title="HandleEvent">
                    <HandleEvent/>
                </Tab>
                <Tab eventKey={6} title="List and key">
                    <ListAndKey arr={arr}/>
                </Tab>
                <Tab eventKey={7} title="Form">
                    <Form/>
                </Tab>
            </Tabs>
        );

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                {tabsInstance}
            </div>
        );
    }
}

export default App;
