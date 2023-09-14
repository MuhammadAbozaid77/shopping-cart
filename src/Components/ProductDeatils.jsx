import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_ToCart } from '../CartRedux/cartSlice';
import { useParams } from 'react-router-dom';
import { getProducts } from '../Calling API/productsApiSlice';
import { ToastContainer } from 'react-toastify';

export default function ProductDeatils() {
  let {productsData} = useSelector((state)=>(state.productsApiSlice_InStore));
  let dispatch =  useDispatch();
  let {productID} = useParams();

  useEffect(() => {
    dispatch(getProducts());
  }, [])
  
  return <>
      <ToastContainer/> 
      <div className='w-[100%] flex items-center flex-col ' >
            
            { productsData?.filter((item)=>item.id == productID).map((item , index)=>(
               <div className='flex w-[100%] md:flex-row flex-col items-center border-b py-5' key={index}>
               <div className='h-[220px]'>
                   <img className=''  src={item.image} alt="" />
               </div>
               <div className='p-3 flex flex-col'>
                   <div className='flex justify-start items-start mt-2'>
                       <span className='text-[14px] font-bold text-slate-700 pr-1 w-[100px]'>  Name   </span>
                       <span className='text-[14px] text-slate-600'>  {item.title} </span>
                   </div>
                   <div className='flex justify-start items-start mt-2'>
                       <span className='text-[14px] font-bold text-slate-700 pr-1 w-[100px]'>  Category   </span>
                       <span className='text-[14px] text-slate-600'>  {item.category} </span>
                   </div>
                   <div className='flex justify-start items-start mt-2'>
                       <span className='text-[14px] font-bold text-slate-700 pr-1 w-[100px]'>  Description   </span>
                       <span className='text-[14px] text-slate-600'>  {item.description} </span>
                   </div>
                   <div className='flex justify-start items-start mt-2'>
                       <span className='text-[14px] font-bold text-slate-700 pr-1 w-[100px]'> Price   </span>
                       <span className='text-[16px] text-slate-600'>   {item.price}  $ </span>
                   </div>
                   <button 
                        onClick={()=>dispatch(add_ToCart(item))}
                        className='border rounded-md p-1 bg-red-700 hover:bg-red-600 w-[80px] text-[12px] mt-3 text-slate-200'> Add To Cart </button>
               </div>
               </div>
            ))
            }
          </div>
  </>
}
