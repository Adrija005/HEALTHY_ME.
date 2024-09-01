import React, { useContext, useState }from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Context } from '../main';


const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ID, setID] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo =  useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post(
        "http://localhost:4000/api/v1/user/patient/register",
        {firstName, lastName, email, phone, ID, dob, gender,password, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(true);
        navigateTo("/");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setID("");
        setDob("");
        setGender("");
        setPassword("");
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-container register-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet magni expedita. Commodi ipsa ab iste saepe. 
        </p>
        <form onSubmit={handleRegistration}>
          <div>
          <input 
          type="text" 
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
          <input 
          type="text" 
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="number" 
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          </div>
          <div>
            <input 
              type="number" 
              placeholder="ID"
              value={ID}
              onChange={(e) => setID(e.target.value)}
          />
            <input 
              type={"date"} 
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
          />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
          >
             <p style={{ marginBottom: 0}}>Already Registered?</p>
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "#271667ca"}}
              >
                Login Now
            </Link>
            </div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
                <button type="submit">Register</button>
            </div>
        </form>
      </div>

    </>
  )
}

export default Register