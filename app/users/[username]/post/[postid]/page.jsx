import React from 'react'

const page = async ({params}) => {
    // console.log(props);
const {username, postid} = await params;
console.log(postid);
  return (
    <div>
      postid - {postid} - {username}
    </div>
  )
}

export default page;
