import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/UserSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state) => state.user); // Fixed typo in 'state.user'
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };

    dispatch(loginUser(userCredentials))
      .then((result) => {
        if (result.payload) {
          setEmail('');
          setPassword('');
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        toast.error('Error logging in. Please check your credentials.', { position: 'top-center' });
      });
  };

  return (
    <>
      <form className="" onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" required className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='btn btn-success'>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
