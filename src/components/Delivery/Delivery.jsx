import React from 'react';
import { useState } from "react";
import "./Delivery.css";

function Delivery(){
  const[date, setDate]=useState();

  return(
    <div className="container">
    <h1> Refill</h1>
    <h4>Selected Date: {date}</h4>
    <input type="date" onChange={e=>setDate(e.target.value)}></input>
    </div>

  )
}


export default Delivery;