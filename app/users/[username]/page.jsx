import React from 'react'

const page = async ({params}) => {
    // console.log(props);
const {username} = await params;
console.log(username);
  return (
    <div>
      hello - {username}
    </div>
  )
}

export default page;
