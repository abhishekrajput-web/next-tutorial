// import React from 'react';

// const DataFetch = async ({searchParams}) => {
//   const searchparams = await searchParams;
//   const userName = searchparams?.name || "";
//   console.log(userName);
//   const res = await fetch(`https://api.genderize.io/?name=${userName}`);
//   const data = await res.json();
//   console.log(data);

//   const isProperName = /^[A-Za-z\s]+$/.test(userName.trim());

//   if(!userName || userName.trim().length < 2 || !isProperName){
//     return (
//       <div>
//         <h1>please provide a proper name</h1>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>gender data name -  {data.name}</h1>
//     </div>
//   )
// }

// export default DataFetch;


import React, { Suspense } from 'react';

const DataFetch = async ({ searchParams }) => {
    const searchparams = await searchParams;
  const userName = searchparams?.name || '';

  const isProperName = /^[A-Za-z\s]+$/.test(userName.trim());

  if (!userName || userName.trim().length < 2 || !isProperName) {
    return (
      <div>
        <h1>Please provide a proper name</h1>
      </div>
    );
  }

  const res = await fetch(`https://api.genderize.io/?name=${userName}`);
  const data = await res.json();

  return (
    <div>
      <Suspense fallback={<p>loading params..</p>}>
      <h1>Gender data name: {data.name}</h1>
      <p>Gender: {data.gender}</p>
      <p>Probability: {data.probability}</p>
      </Suspense>
    </div>
  );
};

export default DataFetch;
