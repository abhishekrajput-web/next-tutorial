import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div>
      <ul className='flex flex-row gap-5'>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/services">Services</Link>
        </li>
        <li>
            <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;
