import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
    name:'wishlist',
    initialState:[],//since this state have to store more than one item
    reducers:{
        //actions
        addtowishlist:(state,action)=>{
            state.push(action.payload)
        },
        //functions toremove from wishlist
        removewishlist : (state,action)=>{
            return state.filter(item=>item.id!==action.payload)

        }
        
    }
})

export const {addtowishlist,removewishlist} = wishlist.actions 
export default wishlist.reducer  