import React, { useContext, useState } from 'react';
import { TiHome } from "react-icons/ti";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify"

const Sidebar = () => {
  const [show, setShow]  = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  
  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) =>{
        toast.success(res.data.messsage);
        setIsAuthenticated(false);
      })
      .catch((err) =>{
        toast.error(err.response.data.messsage);
      });
  };
  const navigateTo = useNavigate();

  const gotoBasePage = () => {
    navigateTo("/");
    setShow(!show);
  }
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  }
  const gotoMessagePage = () => {
    navigateTo("/message");
    setShow(!show);
  }
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(!show);
  }
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  }
  return (
    <>
      <nav 
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
        >
          <div className="links">
            <TiHome onClick={gotoBasePage}/>
            <FaUserDoctor onClick={gotoDoctorsPage} />
            <MdAddModerator onClick={gotoAddNewAdmin} />
            <IoPersonAddSharp onClick={gotoAddNewDoctor} />
            <AiFillMessage onClick={gotoMessagePage} />
            <RiLogoutBoxFill onClick={handleLogout} />
          </div>
      </nav>
      <div className="wrapper"
      style={isAuthenticated ? { display: "none" } : { display: "flex"}}
      >
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />

      </div>

    </>
  )
}

export default Sidebar