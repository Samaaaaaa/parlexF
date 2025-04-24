// import React from 'react';
// import './SignUp.css'
// import { useRef, useState, useEffect } from "react";

// const SignUp = () => {
//     return (
//         <div>
//             <h2>Create your free account</h2>
//             <p>Get Real-Time Expert Advice – No Waiting, Just Answers!</p>
//             <div className="">
//                 <label htmlFor="">First Name</label>
//                 <input type="text" name="" id="" />
//                 <label htmlFor="">Last Name</label>
//                 <input type="text" name="" id="" />
//             </div>
//             <label htmlFor="">Email</label>
//             <input type="email" name="" id="" />

//             <label htmlFor="">Password</label>
//             <input type="password" name="" id="" />

//             <label htmlFor="">Confirm Password</label>
//             <input type="password" name="" id="" />

//             <button>Create the account</button>

//             <a href="">Login</a>
            

//         </div>
//     );
// }
// export default SignUp;

import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: 'user'
      };

      const response = await axios.post('http://localhost:5288/auth/register', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setMessage('Account created successfully!');
      console.log(response.data);
      // Optionally reset form or redirect here
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || error.message || ' Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="contain">
        <div className="form-section">
      <h2 className='fw-700'>Create <span className='blue-text' > your </span>  free account</h2>
      <p className='black-op fw-500'>Get Real-Time Expert Advice – No Waiting, Just Answers!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='fw-700' htmlFor="firstName">First Name <span> *</span> </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Samaa'
            required
          />

          <label className='fw-700' htmlFor="lastName">Last Name <span> *</span> </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Leza'
            required
          />
        </div>

        <label className='fw-700' htmlFor="email">Email <span> *</span> </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='samaaLeza@gmail.com'
          required
        />

        <label className='fw-700' htmlFor="password">Password <span> *</span> </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='********'
          required
        />

        <label className='fw-700' htmlFor="confirmPassword">Confirm Password <span> *</span> </label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='********'
          required
        />

        <button type="submit" className='d-block m-auto' disabled={loading}>
          {loading ? 'Creating Account...' : 'Create the account'}
        </button>
      </form>

      {message && <p>{message}</p>}

      <p className='black-50 fw-500 text-center' >You already have an account? <a href="#">Sign in</a></p>
        </div>

        <div className="side-section">
          <div className="imgWTitle">
          <img src="/public/Frame.svg" className='callImage' alt="Barlex Logo"/>
          <h3 className='blue-text fw-500'>Barlex</h3>
          </div>
      <h3 className='black-op fw-700'>Get Real-Time Expert Advice – No Waiting, Just Answers!</h3>
      <ul>
        <li className='black-op fw-500 d-flex my-3'> <img className='rightImg blue-bg' src="/public/right.svg" alt="right" /> Talk to Your Favorite Expert. No need to wait for appointments</li>
        <li className='black-op fw-500 d-flex my-3'> <img className='rightImg blue-bg' src="/public/right.svg" alt="right" /> 100% Confidential & Secure.</li>
        <li className='black-op fw-500 d-flex my-3'> <img className='rightImg blue-bg' src="/public/right.svg" alt="right" /> Personalized Guidance Just for You.</li>
        <li className='black-op fw-500 d-flex my-3'> <img className='rightImg blue-bg' src="/public/right.svg" alt="right" /> Save Time & Get Immediate Answers.</li>
      </ul>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
