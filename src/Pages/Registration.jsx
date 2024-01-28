import React, { useState } from 'react';
import axios from 'axios';

export default function TestReg() {
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handelinput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint where you want to send the data
      const response = await axios.post('http://localhost:9000/api/register', data);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <form onSubmit={handelsubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handelinput}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handelinput}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handelinput}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}