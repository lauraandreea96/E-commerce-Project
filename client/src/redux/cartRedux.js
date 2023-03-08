import {createSlice}from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action)=>{
            state.quantity += action.payload.quantity;
            if(state.products.find(element => element._id === action.payload._id)){
                let elem = state.products.find(element => element._id === action.payload._id);
                elem.quantity += action.payload.quantity;
            }else{
                state.products.push(action.payload);
            }
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state, action)=>{
            state.quantity -= 1;
            state.products.splice(action.payload.index, 1);
            state.total -= action.payload.price;
        },
        removeOne: (state, action)=>{
            state.quantity -= 1;
            state.total -= action.payload.price;
            state.products[action.payload.index].quantity--;
        },
        addOne: (state, action)=>{
            state.quantity += 1;
            state.total += action.payload.price;
            state.products[action.payload.index].quantity++;
        },
        deleteAll: (state, action)=>{
            state.quantity = 0;
            state.total = 0;
            state.products = [];
        },

    }
});

export const {addProduct, deleteProduct, removeOne, addOne, deleteAll} = cartSlice.actions;
export default cartSlice.reducer;