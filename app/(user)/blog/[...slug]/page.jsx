import React from 'react';

const page = async ({params}) => {
    const {slug} = await params;
    console.log(slug);
  return (
    <div>
      <h1>server compoent dynammic route easy</h1>
    </div>
  )
}

export default page;
