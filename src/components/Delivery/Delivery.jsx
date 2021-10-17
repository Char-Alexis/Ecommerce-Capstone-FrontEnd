import React from 'react';
import { useState } from "react";
import "./Delivery.css";

function Delivery(props){
  const[date, setDate]=useState();

  return(
    <div className="container">
    <h1> Delivery</h1>
    <h4>Selected Date: {date}</h4>
    <input type="date" onChange={e=>setDate(e.target.value)}></input>
    <button  class="alert alert-success" onClick={props.popUp}>Request Refill</button>
    </div>

  )
}


export default Delivery;