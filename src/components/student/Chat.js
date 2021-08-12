import { useHistory } from 'react-router-dom';

const Chat = () => {
    const history = useHistory();

    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => {window.history.back() }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <h1>
            </h1>
            <a href="http://localhost:8000/chat/">Chat Room</a>
        </div>)
}
export default Chat