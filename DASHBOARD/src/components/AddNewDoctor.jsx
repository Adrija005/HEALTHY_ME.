import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../main";
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios"; 

const AddNewDoctor = () => {
  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ID, setID] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");
  
  const navigateTo = useNavigate();
  
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
    "Medicine"
  ];

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("ID", ID);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);

      const response = await axios.post(
        "http://localhost:4000/api/v1/user/doctor/addnew", 
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success(response.data.message);
      navigateTo("/");

      
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setID("");
      setDob("");
      setGender("");
      setPassword("");
      setDoctorDepartment("");
      setDocAvatar("");
      setDocAvatarPreview("");

    } catch (error) {
      const errorMessage = error?.response?.data?.message || "An error occurred while adding the doctor.";
      toast.error(errorMessage);
      console.error("ERROR OCCURRED WHILE ADDING DOCTOR:", error);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="pages">
      <div className="container form-container add-doctor-form">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className='form-title'>REGISTER A NEW DOCTOR</h1>

        <form onSubmit={handleAddNewDoctor}>
          <div className="first-wrapper">
            <div>
              <img src={docAvatarPreview ? docAvatarPreview : "/docHolder.jpg"} alt="Doctor Avatar" />
              <input type="file" onChange={handleAvatar} />
            </div>
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
              <input 
                type="number" 
                placeholder="ID"
                value={ID}
                onChange={(e) => setID(e.target.value)}
              />
              <input 
                type="date" 
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
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
              <select 
                value={doctorDepartment} 
                onChange={(e) => setDoctorDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                {departmentsArray.map((dept, index) => (
                  <option value={dept} key={index}>{dept}</option>
                ))}
              </select>
              <button type="submit">ADD NEW DOCTOR</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;
