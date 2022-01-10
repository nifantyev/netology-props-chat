import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ from, message }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    text: PropTypes.string,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
