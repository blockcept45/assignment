import React, { useState } from 'react';
import { login, logout } from '../services/authService'; // ✅ Make sure authService is correctly set up
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      setMessage(`Welcome, ${user.user.email}`);
    } catch (err) {
      setMessage(`Login error: ${err.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setMessage('Logged out successfully!');
    } catch (err) {
      setMessage(`Logout error: ${err.message}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Login with Supabase</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p className="message">{message}</p>
    </div>
  );
}

export default Login;
