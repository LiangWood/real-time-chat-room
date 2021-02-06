import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message/Message';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {
            messages.map((mes, i) => (
                <div key={i}>
                    <Message message={mes} name={name} />
                </div>
            ))
        }
    </ScrollToBottom>
);

export default Messages;