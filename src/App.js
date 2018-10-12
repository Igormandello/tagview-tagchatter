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
          <div className="sidebar__logo">
            <img src={logo} alt="logo"/>
          </div>
        </aside>

        <div className="content">
          <header className="header">
            <h1 className="header__title">#tagchatter</h1>

            <div className="header__parrots-count">
              <span className="header__title" id="parrots-counter">-</span>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  apiUrl: PropTypes.string.isRequired
};

export default App;
