import React from 'react'
import './DisplayImage.css';


const DisplayImage = (props) => {
  return (
    <div className='img--display'>
      <img src={props.showImage} alt='' id='disImg'/>
    </div>
  )
}

export default DisplayImage