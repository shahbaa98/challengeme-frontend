import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';
import avatar from '../imgs/chicken2.png'

const chat = () => {
  const messages = [
    {
      "text": "שלום מורה, אפשר שאלה?",
      "id": "1",
      "sender": {
        "name": "תלמיד",
        "uid": "user1",
        "avatar": avatar,
      },
    },
  ]
    return (
      <ChatBox
      messages={messages}
    />
      )
}
export default chat