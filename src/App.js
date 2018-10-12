import React, { Component } from 'react';
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
        <aside class="sidebar">
          <div class="sidebar__logo">
            <img src={logo} alt="logo"/>
          </div>
        </aside>

        <div class="content">
          <header class="header">
            <h1 class="header__title">#tagchatter</h1>

            <div class="header__parrots-count">
              <span class="header__title" id="parrots-counter">-</span>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
