import React from 'react';

const ServerComponent = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const data = await res.json();
  return (
    <div>
      <h1>server</h1>
      <div>
        {data.map((d,i)=>(
            <p key={i}>{d.name}</p>
        ))}
      </div>
    </div>
  )
}

export default ServerComponent
