import { createReducer, createSlice } from "@reduxjs/toolkit"
// import { updateStatus } from "./actions"

const initialState = {
    name:'developer',
    age: 18,
}

const userReducer = createSlice({
    name:'person',
    initialState,
    reducers:{
        updateName: (state,action)=>{
            state.name = action.payload
        },
        updateAge: (state,action)=>{
            state.age = action.payload
        },
    }
})


export const { updateName, updateAge } = userReducer.actions
export default userReducer.reducer