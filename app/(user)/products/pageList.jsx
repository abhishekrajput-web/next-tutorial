"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';

const ProductList = () => {
    const searchParams = useSearchParams();
    const pages = searchParams.get("page");
    const category = searchParams.get("category");
    console.log("client components", searchParams);
    console.log("pages", pages);
    console.log("category", category);
    
    
  return (
    <div>
      <h1>hello usesearch params client</h1>
    </div>
  )
}

export default ProductList;
