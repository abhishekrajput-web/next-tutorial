// import React from 'react'


// export async function generateStaticParams(){
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data);
//     return data.map((p)=>({
//         id:p.id.toString(),
//     }
//     ))
// }

// const ProductDetailPage = async ({params}) => {
//     const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
//     const data = await res.json();
//     console.log(data);
//   return (
//     <div>
//       <div style={{ padding: '2rem' }}>
//       <h1>{data.title}</h1>
//       <img src={data.image} alt={data.title} width={200} />
//       <p><strong>Price:</strong> ${data.price}</p>
//       <p><strong>Description:</strong> {data.description}</p>
//       <p><strong>Category:</strong> {data.category}</p>
//     </div>
//     </div>
//   )
// }

// export default ProductDetailPage


// app/product/[id]/page.js
import React from 'react';

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data.map((p) => ({
    id: p.id.toString(),
  }));
}

const ProductDetailPage = async ({ params }) => {
  const param = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${param.id}`);
  const data = await res.json();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} width={200} />
      <p><strong>Price:</strong> ${data.price}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Category:</strong> {data.category}</p>
    </div>
  );
};

export default ProductDetailPage;
