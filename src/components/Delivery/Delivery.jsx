import React from 'react';
import { useState } from "react";
import "./Delivery.css";
import axios from 'axios';

function Delivery(props){
  const[date, setDate]=useState();
  const[addNotes, setAddNotes]= useState({
    notes:'',
  });
   
  
  const handleChange= (event)=> {
      const newNotes={
          ...addNotes,
          [event.target.name]: event.target.value
      }
      setAddNotes(newNotes);
  }

  const handleSubmit= (event)=> {
      event.preventDefault()
      axios.post("http://127.0.0.1:8000/api/store/delivery/", addNotes)
      // window.location.href ='/viewcart'
  }

  return(

    <div>
      <div className="align-self-center">
        <h1> Delivery</h1>
        </div>
        
        <div className="container">
        <div className="row justify-content-center">
        <div className="col ">
        <h4> When do you want your refilled products delivered to you? </h4>
          <input type="date" onChange={e=>setDate(e.target.value)}></input>
          <div>
        <h4> Delivery Notes: </h4>
          
          <form onSubmit={handleSubmit}>
            <input type="notes" name="notes" className="form-control" onInput={handleChange} value={addNotes.notes}/>
        <button className="alert alert-success" type="submit" onClick={props.popUp}>Confirm Delivery</button>
          </form>
        </div>
         
        </div>
      </div>
    </div>
  
    </div>






//     <div>
//     <h1 class="">Delivery</h1>
//     <div class="media">
//   <div class="row">
//     <h2> When do you want your refilled products delivered to you? </h2>
//     <div class="container">
//     <h4>Selected Date: {date}</h4>
//     <input type="date" onChange={e=>setDate(e.target.value)}></input>
//     <button  class="alert alert-success" onClick={props.popUp}>Confirm Delivery</button>
//     </div>
//   </div>
// </div>
// <div>
//   <img class="ml-3" src="/images/delivery.png" alt="Generic placeholder image"/>
// </div>
// </div>

    
  )
}


export default Delivery;