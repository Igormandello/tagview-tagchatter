import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APIFecher from './js/APIFetcher';
import MessageBox from './components/MessageBox';

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
            <MessageBox 
              username="Hackernews"
              avatar="https://robohash.org/bgset_any/size_100x100/ulises.rath.png"
              hour={new Date('2017-10-17T12:09:07.997Z')}
              message="Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Quis aperiam praesentium nostrum doloribus fugiat 
                illum, mollitia fugit assumenda vitae commodi velit 
                perferendis voluptas ipsam distinctio eveniet blanditiis 
                atque est accusamus."
            />
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
