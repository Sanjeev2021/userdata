
import './App.css';
import React, { useEffect } from 'react';
 import {useState} from 'react';
 import UserDetails from "./UserDetails";
 import UserList from './UserList';






function App() {
  const [user , setUser] = user([]);
  const [SelectedUser , setSelectedUser] = useState(null);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
   useEffect (() => {
    fetchData();
   })
   return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
  )};

  


export default App;
