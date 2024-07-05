import logo from './logo.svg';
import './App.css';
import Window from './window';
import { useRef, useState } from 'react';

const indicator = ["wretaing"]



export function App() {
  const [messages, setMessages] = useState([{ remitend: "user ONE", addresse: "Antonio", text: "Hey Antonio" }, { remitend: "user TWO", addresse: "Juliana", text: "Hey Juliana" }]);
  const refInputTextOne = useRef(null);
  const refInputTextTwo = useRef(null);
  const [users, setUser] = useState([{ name: 'user ONE', ref: refInputTextOne }, { name: 'user TWO', ref: refInputTextTwo }]);
  const [indicator, setIndicator] = useState(false);

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

  const changeIndicator = () => {
    //put the inidicator writing
    setIndicator(true)

    setTimeout(()=>{
      setIndicator(false)
    },2000);
    
  }

  return (
    <div className="App">
      <Window user={users[0].name} userAll={users} messages={messages} sendMessage={sendMessage} ref={refInputTextOne} indicator={changeIndicator} indicatorState={indicator}/>
      <Window user={users[1].name} userAll={users} messages={messages} sendMessage={sendMessage} ref={refInputTextTwo} indicator={changeIndicator} indicatorState={indicator}/>
    </div>
  );
}

export default App;
