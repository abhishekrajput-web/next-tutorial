// import React from 'react';
// import { db } from '@/config/db';
// export const dynamic = "force-dynamic";
// const DynammicPage = async () => {
//   const [data] = await db.execute("select * from doctor");
//   console.log(data);
//   console.log("dynammic route");
  
//   return (
//     <div>
// <h1>doctor data bro </h1>
// {data.map((u)=> (
// <div key={u.doctor_id}>
//   <h1>
//     {u.name}
//   </h1>
//   <h1>
//     {u.doctor_id}
//   </h1>
//   <h1>{u.salary}</h1>
// </div>
// ))}
//     </div>
//   )
// }

// export default DynammicPage;




import React from 'react';
import { db } from '@/config/db';
export const dynamic = "force-dynamic";
import { cache } from 'react';
const DynammicPage = async () => {
//   const [data] = await db.execute("select * from doctor");
//   console.log(data);
//   console.log("dynammic route");
const data = await getData();
// console.log("data fetched..");

  return (
    <Doctor data={data}/>
  )
}

export default DynammicPage;




async function Doctor(){
    const data = await getData();
// console.log("data fetched..");
return (
    <div>
<h1>doctor data bro </h1>
{data.map((u)=> (
<div key={u.doctor_id}>
  <h1>
    {u.name}
  </h1>
  <h1>
    {u.doctor_id}
  </h1>
  <h1>{u.salary}</h1>
</div>
))}
    </div>
  )
}


async function getDatas(){
const [data] = await db.execute("select * from doctor");
  console.log(data);
  console.log("resuable function");
  return data;
}


const getData = cache(getDatas);