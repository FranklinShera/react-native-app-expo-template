import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    version: '0.0.1',
    author: 'Franklin Shera',
}


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        setVersion: (state,action) => {
            state.version = action.payload
        },
        setAuthor: (state,action) => {
            state.author = action.payload
        }
    }
})


export const {setVersion,setAuthor} = appSlice.actions;

//selectors
export const selectVersion = state => state.app.version;
export const selectAuthor = state => state.app.author;


export default appSlice.reducer;