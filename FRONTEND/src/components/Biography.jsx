import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
            <img src={imageUrl} alt="whoarewe" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>WHO ARE WE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste accusamus officiis minus quisquam soluta sunt? Iure autem vero aperiam impedit dolores dolorem, natus, repudiandae quidem corporis perferendis neque explicabo!</p>
          <p>We are here to Keep You On Track For The Life Race</p>
          <p>SEE YOU ON BOARD SOON</p>
        </div>
      </div>
    </>
  )
}

export default Biography