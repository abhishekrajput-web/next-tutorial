"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import {useEffect} from "react";
const page = () => {
    const d = useSearchParams();
    const name = d.get("name");
    async function genderReveal(){
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    console.log(data);
    }

    useEffect(()=>{
        genderReveal();
    },[]);

  return (
    <div>
      <h1>name - {name}</h1>
      <h1>probability - </h1>
    </div>
  )
}

export default page;
