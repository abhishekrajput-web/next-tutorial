import React from 'react';

const page = async ({searchParams}) => {
  const searchparams = await searchParams;
  const userName = searchparams.name;
  console.log(userName);
  const res = await fetch(`https://api.genderize.io/?name=${userName}`);
  const data = await res.json();
  console.log(data);

  const isProperName = /^[A-Za-z\s]+$/.test(userName.trim());

  if(!userName || userName.trim().length < 2 || !isProperName){
    return (
      <div>
        <h1>please provide a proper name</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>gender data name -  {data.name}</h1>
    </div>
  )
}

export default page
