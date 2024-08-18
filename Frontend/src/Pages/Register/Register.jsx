import './Register.css'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
export default function Register(){
    return(
        <>
        <Navbar/>
        <div className="container">
        <form>
            <div class="mb-3">
                <label  className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" required/>
            </div>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required/>
            </div>
            <div class="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div class="mb-3">
                <label class="form-label">Gender</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male" checked/>
                    <label for="male">Male</label>
                </div>
                <div>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label>
                </div>
                <div>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label for="other">Other</label>
                </div>
            </div>
            <div class="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="Enter your address" required/>
            </div>
            <div class="mb-3">
                <label className="form-label">Pincode</label>
                <input type="text" className="form-control" id="pincode" name="pincode" placeholder="Enter your pincode" required/>
            </div>
            <div class="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div class="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
        </div>
        
        <Footer/>
        </>
    )
}