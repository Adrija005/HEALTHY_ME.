import React from 'react';
import Base from "../components/Base";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";


const Home = () => {
  return (
    <>
      <Base title={"WELCOME TO HEALTHY ME | WHERE HEALTH IS WEALTH"} imageUrl={"/logo.png"}/>
      <Biography imageUrl={"/ABOUT.png"}/>
      <Departments/>
      <MessageForm/>
    </>
  )
}

export default Home