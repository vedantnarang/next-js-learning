"use client";
import React,{useState} from 'react'

const ClientPage = () => {
    const [count,setCount]=useState(0);
    console.log("client call")
  return (
    <div>
        <h2>Client componenet counter</h2>
        <p>count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default ClientPage