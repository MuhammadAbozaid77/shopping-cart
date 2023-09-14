
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let productsAPI_InitialState = {
    productsData : [] ,
}

export let getProducts = createAsyncThunk( "products/getProducts" , async ()=>{
        let data = await fetch("https://fakestoreapi.com/products") ;
        let data2 = await data.json();
        return data2 
} )


let productsApiSlice = createSlice({
    name : "products" ,
    initialState : productsAPI_InitialState ,
    extraReducers: (builder)=>{
        builder.addCase( getProducts.fulfilled , ( state , action )=>{
            state.productsData = action.payload ;
        } )
    }
})

export let from_productsApiSlice  = productsApiSlice.reducer ;


