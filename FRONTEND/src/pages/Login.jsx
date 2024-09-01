import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { Context } from '../main';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/login',
        { email, password },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container form-container login-form">
      <h2>Sign In</h2>
      <p>Please Login To Continue</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        eveniet magni expedita. Commodi ipsa ab iste saepe. Nam sed
        reprehenderit repudiandae? Molestias sequi vitae minus! Recusandae
        perspiciatis asperiores distinctio necessitatibus!
      </p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          style={{
            gap: '10px',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            display: 'flex',
          }}
        >
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: '#271667ca' }}
          >
            Register Now
          </Link>
        </div>
        <div
          style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
        >
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
