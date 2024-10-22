import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="App">
<input

placeholder='email'
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<input
value={password}
onChange={(e)=>setPassword(e.target.value)}


/>
<button
onClick={()=>{
  axios.post('https://92.113.26.138:8081/api/signin', {email:email,password:password})
  .then((res) => {
console.log(res.data);


  })
  .catch((err) => {
   
 
  });  
}}
>ok</button>
    </div>
  );
}

export default App;
