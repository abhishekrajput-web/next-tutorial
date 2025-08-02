// server component code

// import React from 'react'

// const page = async ({params}) => {
//     // console.log(props);
// const {username} = await params;
// console.log(username);
//   return (
//     <div>
//       hello - {username}
//     </div>
//   )
// }

// export default page;



// client component code 

"use client"; 
import React, {use} from 'react';

const page = ({params}) => {
  const {username} = use(params);
  console.log(username);
  
  return (
    <div>
      <h1>{username}</h1>
    </div>
  )
}

export default page

