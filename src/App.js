import logo from './logo.svg';
import './App.css';
import Window from './window';
import { useRef, useState } from 'react';

const User = {
  id: Number,
  name: String
}

const Message = {

}

export function App() {
  const [messages, setMessages] = useState([{ remitend: "user ONE", addresse: "Antonio", text: "Hey Antonio" }, { remitend: "user TWO", addresse: "Juliana", text: "Hey Juliana" }]);
  const refInputTextOne = useRef(null);
  const refInputTextTwo = useRef(null);
  const [users, setUser] = useState([{ name: 'user ONE', ref: refInputTextOne }, { name: 'user TWO', ref: refInputTextTwo }]);


  const sendMessage = (currentUser) => {
    //put new messages 
    users.forEach(user => {
      if (user.name === currentUser) {
        //extrac messages and remited
        const newMessage = {
          remitend: currentUser,
          addresse: user.ref.current.childNodes[0].value,
          text: user.ref.current.childNodes[1].value
        }
        setMessages([...messages, newMessage])
        
      }
    })


  }


  return (
    <div className="App">
      <Window user={users[0].name} userAll={users} messages={messages} sendMessage={sendMessage} ref={refInputTextOne} />
      <Window user={users[1].name} userAll={users} messages={messages} sendMessage={sendMessage} ref={refInputTextTwo} />
    </div>
  );
}

export default App;
