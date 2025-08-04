import React from 'react'
import Link from 'next/link';
const notFoundPage = () => {
  return (
    <div>
      <h1>NOT FOUNDPAGE.....</h1>
      <Link href="/"></Link>
    </div>
  )
}

export default notFoundPage;


// there is also a  notfound function used when the api id is not defined in the databe to show not foundpage