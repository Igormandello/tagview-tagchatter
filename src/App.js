import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APIFecher from './js/APIFetcher';
import MessageBox from './components/MessageBox';

import logo from './imgs/logo.png';
import send from './imgs/send.svg';

import './css/App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.fetcher = new APIFecher(this.props.apiUrl);
    this.state = {
      parrots: '-',
      user: {},
      messages: []
    };

    this.toggleParrotWrapper = this.toggleParrotWrapper.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    setInterval(this.updateMessages, 3000);
  }

  async componentWillMount() {
    let parrots = await this.fetcher.fetchParrotsCount(),
        user = await this.fetcher.getMe(),
        messages = await this.fetcher.listMessages();

    this.setState(() => {
      return {
        parrots,
        user,
        messages: this.createMessageBoxes(messages)
      }
    });
  }

  async updateMessages() {
    let parrots = await this.fetcher.fetchParrotsCount(),
        messages = await this.fetcher.listMessages();

    this.setState(prev => {
      return {
        ...prev,
        parrots,
        messages: this.createMessageBoxes(messages)
      }
    });
  }

  createMessageBoxes(messages) {
    return messages.map(message =>
      <MessageBox
        key={message.id}
        id={message.id}
        username={message.author.name}
        avatar={message.author.avatar}
        hour={new Date(message.created_at)}
        message={message.content}
        parrot={message.has_parrot}
        toggleParrot={this.toggleParrotWrapper}
      />
    );
  }

  toggleParrotWrapper(messageId, hasParrot) {
    this.fetcher.changeParrotMessage(messageId, hasParrot).then(() => {
      this.setState(prev => {
        return {
          ...prev,
          parrots: prev.parrots + (hasParrot ? 1 : -1)
        }
      });
    });
  }

  sendMessage() {
    this.fetcher.sendMessage(document.querySelector('#message').value, this.state.user.id).then(() => {
      this.updateMessages();
    });
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
              <span className="title" id="parrots-counter">{this.state.parrots}</span>
            </div>
          </header>
          <div className="messages-section">
            {this.state.messages}
          </div>
          <footer>
            <div className="user-picture">
              <img src={this.state.user.avatar} alt=""/>
            </div>
            <input id="message" className="message-input"/>
            <img className="send-message" src={send} alt="" onClick={this.sendMessage}/>
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
