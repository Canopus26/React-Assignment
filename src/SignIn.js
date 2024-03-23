// SignIn.js
import React, { useState } from 'react';



function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const predefinedCredentials = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
    { email: 'user4@example.com', password: 'password4' },
    { email: 'user5@example.com', password: 'password5' },
    // Add more predefined sets of credentials if needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the provided credentials match any predefined set
    const user = predefinedCredentials.find(
      (cred) => cred.email === formData.email && cred.password === formData.password
    );
    if (user) {
      setLoggedInUser(user);
    } else {
      setInvalidCredentials(true);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignOut = () => {
    setLoggedInUser(null);
    setFormData({ email: '', password: '' });
    setInvalidCredentials(false);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.email}!</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {invalidCredentials && <p>Invalid email or password</p>}
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <button type="submit">Sign In</button>
        </form>
      )}
    </div>
  );
}

export default SignIn;
