import React, { useState } from 'react';

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      // Perform login action here
      console.log('Logging in with:', { username, password });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div style={{ marginBottom: '3px'}}>
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
        <button onClick={switchToSignup}>Switch to Signup</button>
      </div>
    </div>
  );
}

export default LoginForm;
