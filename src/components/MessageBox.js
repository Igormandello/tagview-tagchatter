import React, { Component } from 'react';
import '../css/MessageBox.css';

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parrot: false
    }
  }

  toggleParrot = () => {
    this.setState((prev) => {
      return {
        parrot: !prev.parrot
      }
    })
  }

  render() {
    return (
      <div className={'message-box' + (this.state.parrot ? ' active' : '')}>
        <div className="user-picture">
          <img alt="user" />
        </div>
        <div className="message">
          <div className="info">
            <span className="user-name">us3r</span>
            <span className="hour">12:09</span>
            <span className="parrot" onClick={this.toggleParrot}></span>
          </div>
          <p className="message-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            voluptatibus maiores eaque placeat dolorum incidunt. Quod non,
            architecto tempora nesciunt ipsum assumenda ex, corporis laboriosam
            facilis dicta aliquam quas. Reprehenderit.
          </p>
        </div>
      </div>
    );
    }
}

export default MessageBox;