import logo from './logo.svg';
import './App.css';
import Window from './window';
import { useState } from 'react';

const User = {
  id:Number,
  name:String
}

const Message = {

}

export function App() {
  const [users, setUser] = useState({});
  const [messages, setMessage] = useState({});


  return (
    <div className="App">
      <Window />
      <Window />
    </div>
  );
}

export default App;
