import React from 'react';
import AppointmentForm from "../components/AppointmentForm"
import Base from '../components/Base';

const Appointment = () => {
  return (
    <>
      <Base
      title={"Schedule Your Appointment | Healthy Me"}
      imageUrl={"/sign in.png"}
      />
       <AppointmentForm/>
    </>
  )
}

export default Appointment