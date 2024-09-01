import React, { useState, useContext } from 'react';
import { Context } from "../main";
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';  

const AddNewAdmin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ID, setID] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/admin/addnew",
        { firstName, lastName, email, phone, ID, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message);
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

    } catch (error) {
      // Enhanced error handling
      const errorMessage = error?.response?.data?.message || "An error occurred while adding the admin.";
      toast.error(errorMessage);
      console.error("ERROR OCCURRED WHILE ADDING ADMIN:", error);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page">
      <div className="container form-container add-admin-form">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className='form-title'>ADD NEW ADMIN</h1>

        <form onSubmit={handleAddNewAdmin}>
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
              type="date" 
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
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">ADD NEW ADMIN</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewAdmin;
