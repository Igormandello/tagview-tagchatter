import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APIFecher from './js/APIFetcher';
import logo from './imgs/logo.png';
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
              <img className="user-picture"/>
              <div className="message">
                <div className="info">
                  <span className="user-name">us3r</span>
                  <span className="hour">12:09</span>
                  <span className="parrot"></span>
                </div>
                <p className="message-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <footer>
            <img className="user-picture" alt="user"/>
            <input className="message-input"/>
            <button className="send-message">
            </button>
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
