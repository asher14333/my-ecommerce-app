import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authentication } from './Authenticator';

const LoginForm = ({ onSwitchToSignup }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigate();
  const {login} = Authentication();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please enter a Username and a Password.");
      return;
    }

    const retrieveInfo = { username, password };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(retrieveInfo),
      });

      const data = await response.json();

      if (response.ok) {
        login();
        navigation('/Productpage');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error");
    } 
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {message && <div style={{ color: 'red', marginBottom: '10px' }}>{message}</div>}      <div style={{ marginBottom: '3px'}}>
        <label>Username: </label>
        <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '3px'}}>
        <label>Password: </label>
        <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '3px'}}>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={onSwitchToSignup}>Switch to Signup</button>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;
