"use client";
import React, { useState, useEffect } from 'react';
import Popup from '../Popup';

const ClientComponents = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);
   async function getData(){
        let res = await fetch(url);
        let info = await res.json();
        setData(info);
        console.log(info);
        return info;
    }

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div>
      <h1>client</h1>
      <div>
        {data.map((d,i)=>(
            <p key={i}>{d.name}</p>
        ))}
      </div>
      <Popup/>
    </div>
  )
}

export default ClientComponents
