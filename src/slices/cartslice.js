import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
        },

        removefromcart : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptycart :(state)=>{
            return state = []
        }

        

    }
})
export const {addtocart,removefromcart,emptycart}=cartslice.actions
export default cartslice.reducer