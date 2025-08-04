// import React from 'react'
// import Link from 'next/link';
// const ProductPage = async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data);
//   return (
//     <div>
//       <h1>prodcut list</h1>
//       <div>
//         <ul>
//             {data.map((p)=>(
//                 <li key={p.id}>
//                     <Link href={`/product/${p.id}`}>{p.title}</Link>
//                 </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default ProductPage


// app/product/page.js
import React from 'react';
import Link from 'next/link';

const ProductPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.map((p) => (
          <li key={p.id}>
            <Link href={`/generatestaticparams/products/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
