"use client";
import React,{useState, useEffect} from 'react';

const page = () => {
    const [jokes, setJokes] = useState({});
    const [showJokes, setShowJokes] = useState(true);
    async function fetchJokes(){
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        console.log(data);
        setJokes(data);
    }

    useEffect(()=>{
        fetchJokes();
    },[]);

  return (
    <div className="flex flex-col gap-4">
        <h1>{jokes.setup}</h1>
        {showJokes ? 
        <button onClick={()=> setShowJokes(false)}>reveal</button> : 
        <div>
            <h1>{jokes.punchline}</h1>
            <button onClick={()=> setShowJokes(true)}>hide punchline</button>
        </div>
    }

    <button onClick={()=> fetchJokes()}>next</button>

      
    </div>
  )
}

export default page;
