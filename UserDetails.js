import './App.css';
import React, { useEffect } from 'react';
import {useState} from 'react';


function UserDetails ({user}){
    return (
      <div>
        <h2>User Details</h2>
        <p>
          Name : {user.name} <br/>
          Email : {user.email} <br />
          phone : {user.phonre} <br />
  
        </p>
      </div>
    );
  }