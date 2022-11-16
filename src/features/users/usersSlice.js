import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id:'0', name: 'mustaf selman'},
    { id: '1', name: 'ubeyde enes'},
    { id: '2', name: 'sümeyye onal'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer