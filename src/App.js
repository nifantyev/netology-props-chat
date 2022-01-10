import 'font-awesome/css/font-awesome.css';
import './App.css';
import Message from './components/Message';

function App() {
  const message = {
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идет работа над проектом?',
  };
  return (
    <div className="chat">
      <div className="chat-history">
        <ul>
          <Message from={message.from} message={message} />
        </ul>
      </div>
    </div>
  );
}

export default App;
