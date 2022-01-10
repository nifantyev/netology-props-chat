import 'font-awesome/css/font-awesome.css';
import './App.css';
import Message from './components/Message';
import Response from './components/Response';

function App() {
  const message = {
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идет работа над проектом?',
  };
  const response = {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.',
  };
  return (
    <div className="chat">
      <div className="chat-history">
        <ul>
          <Message from={message.from} message={message} />
          <Response from={response.from} message={response} />
        </ul>
      </div>
    </div>
  );
}

export default App;
