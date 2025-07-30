import React from 'react'
import Image from 'next/image';
import image from "@/public/Mountain.png";

const Home = () => {
  return (
    <div className='font-roboto'>
      <h1>hello next js</h1>

      <div className='w-full h-screen relative bg-green-400 m-5 overflow-x-hidden'>
        <Image src={image} alt='my image' priority={false} quality={100} fill={true} placeholder='blur'/>
      </div>
    </div>
  )
}

export default Home;
