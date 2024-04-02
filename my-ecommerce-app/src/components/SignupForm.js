import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    if (
      username.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      email.trim() !== ''
    ) {
      if (password === confirmPassword) {
        // Perform signup action here
        console.log('Signing up with:', { username, password, email });
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
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
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}/>
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
      <button onClick={switchToLogin}>Switch to Login</button>
    </div>
  );
}

export default SignupForm;
