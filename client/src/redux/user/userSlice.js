import { createSlice, current } from "@reduxjs/toolkit";
import signIn from "../../pages/signIn";

const initialState={
    currentUser:null,
    error:null,
    loading:false
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=false;
        },
        signInFaliure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
});

export const {signInStart,signInSuccess,signInFaliure}=userSlice.actions;
export default userSlice.reducer;