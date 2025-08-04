"use client";
import React, { Suspense } from 'react';
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
      <Suspense fallback={<p>search params</p>}>
    <div>
      <h1>name - {name}</h1>
      <h1>probability - </h1>
    </div>
      </Suspense>
  )
}

export default page;
