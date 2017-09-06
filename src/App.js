import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';


class App extends Component {
  render() {
      let comment = {
          date: new Date(),
          text: 'I hope you enjoy learning React!',
          author: {
              name: 'Hello Kitty',
              avatarUrl: 'http://placekitten.com/g/64/64'
          }
      };
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
                   alt={props.user.name} />
          );
      }

      function UserInfo(props) {
          return (
              <div className="UserInfo">
                  <Avatar user={props.user} />
                  <div className="UserInfo-name">
                      {props.user.name}
                  </div>
              </div>
          );
      }

      function Comment(props) {
          return (
              <div className="Comment">
                  <UserInfo user={props.author} />
                  <div className="Comment-text">
                      {props.text}
                  </div>
                  <div className="Comment-date">
                      {formatDate(props.date)}
                  </div>
              </div>
          );
      }

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello, world!</h1>
          <Clock />
          <h3>clgt</h3>
          <Welcome name="bach" />
          <Welcome name="skyy" />
          <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author} />
      </div>
    );
  }
}

export default App;
