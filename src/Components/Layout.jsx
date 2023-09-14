import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return <>
  
  <div>
      <div>
          <Navbar/>
      </div>
      <div className='md:p-[50px] p-[20px] mt-[50px]'>
          <Outlet>  </Outlet>
      </div>
  </div>

  </>
}
