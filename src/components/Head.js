import React from 'react';
import './Head.css';
import Ticon from './Assets/icons/TrollFace.jpg';

const Head = (props) => {
  return (
    <header id='head--main'>
        <img src={props.image} id='troll--icon'/>
       <span id='txt'><p id='text'>{props.title}</p></span>  <p><span id='r-course'> {props.course } </span></p>
    </header>
  )
}

export default Head;