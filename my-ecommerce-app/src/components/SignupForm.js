import React, { useState } from 'react';

const SignupForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (!username || !password || !passwordConfirm || !email) {
      setMessage("All fields are required.");
      return;
    }
  
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match.");
      return;
    }
  
    const retrieveInfo = { username, password, email };
  
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(retrieveInfo),
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.message); 
      if (data.message === 'User registered successfully' || data.message === 'Username is already taken') {
        setUsername('');
        setPassword('');
        setpasswordConfirm('');
        setEmail('');
      }
    })
    .catch((error) => {
      setMessage("Error");
    });
  };

  return (
    <form onSubmit={handleSignup}>
      {message && <div style={{ color: 'red', marginBottom: '10px' }}>{message}</div>}
      <div>
      <h2>Signup</h2>
      <div style={{ marginBottom: '3px'}}>
        <label>Username: </label>
        <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div style={{ marginBottom: '3px'}}>
        <label>Password: </label>
        <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div style={{ marginBottom: '3px'}}>
        <label>Confirm Password: </label>
        <input
        type="password"
        placeholder="Confirm your password"
        value={passwordConfirm}
        onChange={(e) => setpasswordConfirm(e.target.value)}/>
      </div>
      <div style={{ marginBottom: '3px'}}>
        <label>Email: </label>
        <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div style={{ marginBottom: '3px'}}>
      <button onClick={handleSignup}>Signup</button>
      </div>
      <button onClick={onSwitchToLogin}>Switch to Login</button>
    </div>
    </form>
  );
};

export default SignupForm;