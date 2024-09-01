import React from 'react'
import Base from "../components/Base"
import Biography from '../components/Biography'

const AboutUs = () => {
  return (
    <>
    <Base
      title={"Learn More About Us | Healthy Me"}
      imageUrl={"/ABOUT.png"}
    />
    <Biography imageUrl={"/WHO WE ARE.png"}/>
    </>
  )
}

export default AboutUs;