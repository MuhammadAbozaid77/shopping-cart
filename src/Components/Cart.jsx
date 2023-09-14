import React, { useEffect } from 'react';
import {BiLogoMastercard, BiLogoPaypal, BiLogoVisa} from "react-icons/bi";
import {SiPayoneer} from "react-icons/si";
import {BsCartPlus} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { delete_Product , get_total_Price }  from '../CartRedux/cartSlice';
import { ToastContainer } from 'react-toastify';



export default function Cart() {

    let {cart_Items , totalPrice} = useSelector((state)=>(state.CartSlice_InStore));
    let dispatch =  useDispatch();

    useEffect(() => {
      dispatch(get_total_Price())
    }, [cart_Items])
    
  return <>
   <ToastContainer/>
    <div className='flex justify-center items-center py-5 border-b'>
        <BsCartPlus size={35}/> 
        <span className='text-[20px] text-slate-800 text-center mx-3 font-bold'>  My Cart  </span>
    </div>
    <div className='flex md:flex-row flex-col md:items-start items-start gap-5'>
        {
            cart_Items.length > 0 ? 

          <div className='md:w-[70%] w-[100%] flex items-center flex-col ' >
            { cart_Items.map((item , index)=>(
               <div className='flex w-[100%] md:flex-row flex-col items-center border-b py-5' key={index}>
               <div className='w-[140px]'>
                   <img className=''  src={item.image} alt="" />
               </div>
               <div className='p-3 flex flex-col'>
                   <div className='flex justify-start items-center'>
                       <span className='text-[12px] font-bold text-slate-700 pr-1'>  Product Name :  </span>
                       <span className='text-[12px] text-slate-600'> {item.title} </span>
                   </div>
                   <div className='flex justify-start items-center'>
                       <span className='text-[12px] font-bold text-slate-700 pr-1'> Product Price :  </span>
                       <span className='text-[14px] text-slate-600'>  {item.price}  $ </span>
                   </div>
                   <button 
                        onClick={()=>dispatch(delete_Product(item))}
                        className='border rounded-md p-1 bg-red-700 hover:bg-red-600 w-[80px] text-[12px] mt-3 text-slate-200'> Remove </button>
               </div>
               </div>
            ))
            }
          </div>
          :
          <div className='md:w-[70%] w-[100%] h-[100%] flex justify-center items-center ' >
                <div className='mt-[100px] text-slate-800/50 text-[50px]' > Cart Is Empty </div>
          </div>
        }
          <div className='md:w-[30%] w-[100%]  border my-5'>
                    <div className='p-3 flex flex-col w-[100%] '>
                        <div className='flex justify-start items-center'>
                            <span className='text-[14px] font-bold text-slate-700 pr-1'> Number Of Products :   </span>
                            <span className='text-[16px] text-slate-600'> {cart_Items.length} </span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <span className='text-[14px] font-bold text-slate-700 pr-1'> Discount :  </span>
                            <span className='text-[16px] text-slate-600'>  20 %</span>
                        </div>
                        <div className='flex justify-start items-center mt-2 border-t'>
                            <span className='text-[14px] font-bold text-slate-700 pr-1'> Total Price :  </span>
                            <span className='text-[16px] text-slate-600'>  {parseInt(totalPrice.toFixed(1))} $ </span>
                        </div>
                        <button className='border rounded-md p-1 bg-blue-700 hover:bg-blue-600 w-[100px] text-[14px] mt-2 text-slate-200'> Pay Now </button>
                        <div className='flex justify-center items-center border-t mt-2 pt-5'>
                            <span className='text-[14px] font-bold text-blue-600 pr-1 p-1 border rounded-md m-1'> 
                                <BiLogoVisa size={30} /> 
                            </span>
                            <span className='text-[14px] font-bold text-blue-600 pr-1 p-1 border rounded-md m-1'> 
                                <BiLogoMastercard size={30} /> 
                            </span>
                            <span className='text-[14px] font-bold text-blue-600 pr-1 p-1 border rounded-md m-1'> 
                                <SiPayoneer size={30} /> 
                            </span>
                            <span className='text-[14px] font-bold text-blue-600 pr-1 p-1 border rounded-md m-1'> 
                                <BiLogoPaypal size={30} /> 
                            </span>
                        </div>
                    </div>
          </div>
    </div>
  </>
}
