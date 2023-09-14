import { configureStore } from "@reduxjs/toolkit";
import { from_CartSlice } from "./cartSlice";
import { from_productsApiSlice } from "../Calling API/productsApiSlice";


let cartStore = configureStore({
    reducer : {
        CartSlice_InStore : from_CartSlice ,
        productsApiSlice_InStore : from_productsApiSlice ,
    }
});

export default cartStore ;