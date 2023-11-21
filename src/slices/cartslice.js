import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
        },

        //function to remove cart
        removefromcart : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)

        },
        //fuction to empty cart
        emptycart :(state)=>{
            return state = []
        }

        

    }
})
export const {addtocart,removefromcart,emptycart}=cartslice.actions
export default cartslice.reducer