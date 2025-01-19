import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        setLoading:(state,action)=>{
            //actions
            state.loading=action.payload;
        },
        setUser:(state,action)=>{
            //actions
            state.user=action.payload;
        },
    }
})

export const {setLoading,setUser}=authSlice.actions;
export default authSlice.reducer;
