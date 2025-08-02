// search param is for the server components

import React from 'react'
import ProductList from './pageList';

const page = async ({searchParams}) => {
    const searchparams = await searchParams;
    console.log("server components", searchparams);

    const category = searchparams.category || "default";
    const page = searchparams.page || 1;
    const price = searchparams.price || 0;
  return (
    <div>
      <ProductList/>
      <h1>hello prdocuts server {category} {page} {price}</h1>
    </div>
  )
}

export default page;
