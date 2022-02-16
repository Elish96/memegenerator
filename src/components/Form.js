import React from 'react';
import './Form.css';



const Form = (props) => {

        

  return (
      <>
            <form id='form--main' action='/#'>
                <input type='text'  placeholder='first text' className='ipt'/>
                <input type='text'  placeholder='second text'  className='ipt'/>

            <button type='submit'  className='ipt btn' onClick={props.Btn}>Generate New Meme</button>
      
            </form>
            </>
   
  )
}

export default Form;