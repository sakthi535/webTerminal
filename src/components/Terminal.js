
import '../App.css'
import React from 'react'

export default function Terminal() {
  


  function handleSubmit(e){
    e.preventDefault();

  }
  
  
  return (
    <div className='terminal'>
        
        <form>
            <span>Enter Command here : </span>
            <input type="text" className='no-outline' placeholder='Enter Text Here' onSubmit={this.handleSubmit}></input>
        </form>


    </div>
  )
}
