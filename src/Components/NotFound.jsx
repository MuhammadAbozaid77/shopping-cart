import React from 'react';
import notFoundimage from "../img/not.png";
import Navbar from './Navbar';


export default function NotFound() {
  return <>
    <Navbar/>
    <div className='h-[100vh] flex justify-center items-center'>
        <img src={notFoundimage} alt="notFoundimage" />
    </div>

  </>
}
