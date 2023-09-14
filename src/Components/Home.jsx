import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Calling API/productsApiSlice';
import { add_ToCart}  from '../CartRedux/cartSlice';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



export default function Home() {

  const {productsData} = useSelector((state) => state.productsApiSlice_InStore);
  const dispath =  useDispatch();
  
  useEffect(() => {
    dispath(getProducts());
  }, [])
  
  return <>

      <ToastContainer className={"text-blue-500"} />
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
        {
          productsData.map((item , index)=>(
            <div className="rounded overflow-hidden shadow-lg" key={index}>
                <div className='flex justify-center items-center pt-3 h-[200px] border'> 
                    <Link to={`/productdetails/${item.id}`}> <img className="h-[150px]" src={item.image} alt={item.id}/> </Link>
                </div>
                <p className="font-normal text-md text-gray-700 text-base p-3 h-[50px]"> {item.title.slice(0, 50)} </p>
                <div className=" py-2 px-3 h-[100px] flex justify-between items-center">
                    <button 
                      onClick={()=>dispath(add_ToCart(item))}
                      className="font-normal text-md text-gray-200 bg-slate-900 px-2 py-1 rounded-md"> Add To Cart </button>
                    <button className="font-normal text-md text-gray-700 "> {item.price} $ </button>
                </div>
            </div>
          ))
        }
      </div>

  </>
}
