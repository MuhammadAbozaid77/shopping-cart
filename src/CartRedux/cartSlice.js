import { createSlice } from "@reduxjs/toolkit";
import { productsAPI_InitialState } from "../Calling API/productsApiSlice";
import { toast } from 'react-toastify';


let {productsData} = productsAPI_InitialState;
const addNotify = ()=>{
    toast.success("Product Add Successfuly");
} 
const removeNotify = ()=>{
    toast.error("Product Delete Successfuly")
} 

let Cart_initial_State = {
    cart_Items : [] ,
    totalQuantity_Price : [0] ,
    totalPrice : 0 ,
    allProductsData : productsData ,
}

let cartSlice = createSlice({
    name : "cartSlice_Name" ,
    initialState : Cart_initial_State ,
    reducers : {

        add_ToCart : (state , action)=>{
            let itemIndex  = state.cart_Items.findIndex((item)=> item.id === action.payload.id );
            if( itemIndex < 0 ){
                state.cart_Items.push(action.payload);     
                state.totalQuantity_Price.push(action.payload.price);     
            }
            addNotify();
        } ,

        delete_Product : (state , action)=>{
            let itemIndex  = state.cart_Items.findIndex((item)=> item.id === action.payload.id );
            state.cart_Items.splice(itemIndex , 1);
            state.totalQuantity_Price = state.totalQuantity_Price.filter((item)=> item !== action.payload.price );
            removeNotify()
        } ,

        get_total_Price : (state , action)=>{
            state.totalPrice  =  state.totalQuantity_Price?.reduce(( total , num )=> total + num );
        } ,
    }
});

export let from_CartSlice  = cartSlice.reducer ;
export let { add_ToCart , delete_Product , get_total_Price }  = cartSlice.actions ;



