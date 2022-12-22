import React, {useState} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async()=>{
  const response = await fetch("https://api.github.com/users");
  const jsonresponse = await response.json();
  setUsers(jsonresponse);
  }

  return (
    <div className="App">
      <button onClick={loadUsers}>Get Data</button>
      <h1>Users:</h1>
      <ul>
        {users.map(({id,login,avatar_url}) => 
        (<li key={id}>Name: {login} Avathor: {avatar_url} </li>))}
      </ul>
    </div>
  );
}

export default App;
