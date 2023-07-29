import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      const users = data.users;

      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        setMessage('200 OK');
      
      } else {
        setMessage('Invalid username or password from the given apis');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className='sign'>
        <h3>Welcome back</h3>
      <h1>Sign in to your Account</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <button onClick={handleLogin}>Continue</button>
      <p>{message}</p>
      <h2>Profile</h2>
      
      <p> {username}</p>
      <p>{password}</p>

    </div>
  );
};

export default Login;
