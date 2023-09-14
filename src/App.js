import React from 'react';
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ProductDeatils from "./Components/ProductDeatils";
import NotFound from "./Components/NotFound";


export default function App(props) {
  
let routers = createBrowserRouter([
  {path: "/" , element : <Layout /> , errorElement : <NotFound/>, children : [
    {index:true , element :  <Home/> },
    {path:"cart", element :  <Cart/> },
    {path:"productdetails/:productID", element :  <ProductDeatils/> },
  ]}
])

  return <RouterProvider router={routers}>
      {props.children}
  </RouterProvider>

}
