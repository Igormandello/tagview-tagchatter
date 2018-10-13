import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APIFecher from './js/APIFetcher';
import logo from './imgs/logo.png';
import send from './imgs/send.svg';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    APIFecher(props.apiUrl);
  }

  render() {
    return (
      <div className="app">
        <aside className="sidebar">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
        </aside>

        <div className="content">
          <header>
            <h1 className="title">#tagchatter</h1>

            <div className="parrots-count">
              <span className="title" id="parrots-counter">-</span>
            </div>
          </header>
          <div className="messages-section">
            <div className="message-box">
              <div className="user-picture">
                <img alt="user"/>
              </div>
              <div className="message">
                <div className="info">
                  <span className="user-name">us3r</span>
                  <span className="hour">12:09</span>
                  <span className="parrot"></span>
                </div>
                <p className="message-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, 
                  voluptatibus maiores eaque placeat dolorum incidunt. Quod non, 
                  architecto tempora nesciunt ipsum assumenda ex, corporis laboriosam 
                  facilis dicta aliquam quas. Reprehenderit.
                </p>
              </div>
            </div>
          </div>
          <footer>
            <div className="user-picture">
              <img alt="user"/>
            </div>
            <input className="message-input"/>
            <img className="send-message" src={send} alt=""/>
          </footer>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  apiUrl: PropTypes.string.isRequired
};

export default App;
