import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
import {BsCartPlus} from "react-icons/bs";



export default function Navbar() {

  let {cart_Items} = useSelector((state)=>(state.CartSlice_InStore));

  return <>
      
      <div className='px-5 py-3 bg-zinc-800 fixed top-0 left-0 right-0'>
          <ul className="flex justify-between items-center">
            <li className="mr-6">
              <Link className="" to="/">Home</Link>
            </li>
            <li className="mr-6">
              <Link className="relative"   to="/cart"> 
                  <BsCartPlus size={30}/>
                  <span 
                      className={ cart_Items.length > 0 ? 
                      "block absolute text-[10px] top-[-2px] right-[-15px] bg-white text-red-500 w-[15px] h-[15px] rounded-full text-center" : "hidden" }> 
                    {cart_Items.length} 
                  </span> 
              </Link>
            </li>
          </ul>
      </div>

  </>
}
 