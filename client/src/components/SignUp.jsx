import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import '../components/SignUp.css';

const SignUp = () => {
  const history = useHistory();
  const [signupData, setSignUpData] = useState({});

  const handleChange = event => {
    setSignUpData({ ...signupData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios
        .post('/api/users/signup', signupData)
        .then(response => console.log(response));
      history.push('/dashboard/equipment');
    } catch (error) {
      swal('Operation failed', { icon: 'error' });
    }
  };
  return (
    <div className='container'>
      <div className='main-area flex'>
        <form className='form' name='signup-form' onSubmit={handleSubmit}>
          <div className='inner-form'>
            <h1 className='text-ob'>Welcome Backstage</h1>
            <input
              className='text-input'
              type='text'
              placeholder='Username'
              name='name'
              required
              onChange={handleChange}
            />
          </div>
          <div className='inner-form'>
            <input
              className='text-input'
              type='email'
              placeholder='Email'
              name='email'
              required
              onChange={handleChange}
            />
          </div>
          <div className='inner-form'>
            <input
              type='password'
              name='password'
              className='text-input'
              placeholder='Password'
              required
              onChange={handleChange}
            />
          </div>
          <div className='btn-area'>
            <input type='submit' className='btn-1' value='Sign Up' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
