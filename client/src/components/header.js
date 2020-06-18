import React from 'react';
import logo from '../logo.svg';

export default function header(props) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <h3>Welcome to News Feed</h3>

          <p>
          {props.username ? `Hello ${props.username}!` : 'Please sign in to add your comments or post your own stories.' }
          </p>

      </header>
    </div>
  )
}
