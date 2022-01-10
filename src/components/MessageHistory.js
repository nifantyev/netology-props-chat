import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

const MessageHistory = ({ list }) => {
  return (
    list && (
      <ul>
        {list.map((message) => {
          if (message.type === 'message')
            return (
              <Message key={message.id} from={message.from} message={message} />
            );
          else if (message.type === 'response')
            return (
              <Response
                key={message.id}
                from={message.from}
                message={message}
              />
            );
          else if (message.type === 'typing')
            return (
              <Typing key={message.id} from={message.from} message={message} />
            );
          return null;
        })}
      </ul>
    )
  );
};

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default MessageHistory;
