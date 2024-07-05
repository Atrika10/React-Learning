import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser :(state, action) =>{
            state = action.payload  // update the state with the payload
            return state;
        },
        removeUser : (state, action) =>{
            state = null
            return state;
        }
        
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
