import React from 'react';
import { db } from '@/config/db';
// used in isr - incremental state rendring used after npm run build- used to add dynammic feature in sataic rendrig by recing the file after speifc time or seconds and serves the data instially romt the catches and new data after fetched fromt eh time
export const revalidate = 30;

const StaticPage = async () => {
  const [data] = await db.execute("select * from doctor");
  console.log(data);
  console.log("static route");
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

export default StaticPage
