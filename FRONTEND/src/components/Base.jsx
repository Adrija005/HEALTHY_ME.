import React from 'react'

const Base = ({title, imageUrl}) => {
  return (
    <>
      <div className="base container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to HEALTHY ME – your partner in achieving a healthier, happier lifestyle. We provide practical tips, expert advice, and support for all aspects of well-being, from nutrition and fitness to mental health. Join us on the journey to a balanced, sustainable, and fulfilling life. HEALTHY ME: WHERE HEALTH IS WEALTH!
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="base" className="animated-image" />
          <span>
            <img src="/Vector(1).png" alt="vector" />
          </span>

        </div>
      </div>
    </>
  )
}

export default Base;