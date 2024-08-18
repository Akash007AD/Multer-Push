import './Register.css';
import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({
    username: '',
    name: '',
    password: '',
    gender: '',
    address: '',
    pincode: '',
    email: '',
    phoneNumber: '',
  });

  function handleInput(event) {
    setUser((prevDetails) => {
      return { ...prevDetails, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent page refresh
    // Add your form submission logic here
    console.log(user)
    fetch("http://localhost:3026/api/v1/users/register", {
        method: "POST",
        body: JSON.stringify(user),
    })
    .then((response) =>response.json())
    .then((data)=>{
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    });
    }
  

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={user.username}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={user.name}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              onChange={handleInput}
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <input
                type="radio"
                onChange={handleInput}
                id="male"
                name="gender"
                value="male"
                checked={user.gender === 'male'}
              />
              <label>Male</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={handleInput}
                id="female"
                name="gender"
                value="female"
                checked={user.gender === 'female'}
              />
              <label>Female</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={handleInput}
                id="other"
                name="gender"
                value="other"
                checked={user.gender === 'other'}
              />
              <label>Other</label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={user.address}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pincode</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              id="pincode"
              name="pincode"
              placeholder="Enter your pincode"
              value={user.pincode}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              onChange={handleInput}
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={user.phoneNumber}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
