import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  // setTimeout(() => {
  //   navigate(-1);
  // }, 2000)

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" text-3xl text-white ">Not Found</div>
    </div>
  )
}

export default NotFound