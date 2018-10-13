import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/MessageBox.css';

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parrot: props.parrot ? true : false
    }
  }

  toggleParrot = () => {
    this.props.toggleParrot(this.props.id, !this.state.parrot);

    this.setState((prev) => {
      return {
        parrot: !prev.parrot
      }
    })
  }

  formatHour(hour) {
    let h = hour.getHours();
    if (h < 10)
      h = '0' + h;

    let m = hour.getMinutes();
    if (m < 10)
      m = '0' + m;

    return h + ':' + m;
  }

  render() {
    return (
      <div className={'message-box' + (this.state.parrot ? ' active' : '')}>
        <div className="user-picture">
          <img src={this.props.avatar} alt="" />
        </div>
        <div className="message">
          <div className="info">
            <span className="user-name">{this.props.username}</span>
            <span className="hour">{this.formatHour(this.props.hour)}</span>
            <span className="parrot" onClick={this.toggleParrot}></span>
          </div>
          <p className="message-content">
            {this.props.message}
          </p>
        </div>
      </div>
    );
    }
}

MessageBox.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  hour: PropTypes.instanceOf(Date).isRequired,
  parrot: PropTypes.bool,
  message: PropTypes.string.isRequired,
  toggleParrot: PropTypes.func.isRequired
}

export default MessageBox;