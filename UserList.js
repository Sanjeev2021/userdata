import './App.css';
import React, { useEffect } from 'react';
import {useState} from 'react';

function userList({users}) {
    return (
      <div>
        <h2> user</h2>
        <ul>
          {users.map((user)=>{

              <li key = {user.id} onClick ={() => setSelectedUser(user)}>
                {user.email} {user.phone}
    
                </li>
              

          }) 
            
          }
        </ul>
      </div>
    )};