import React from 'react';
import PropTypes from 'prop-types';

const Typing = ({ from, message }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </li>
  );
};

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default Typing;
