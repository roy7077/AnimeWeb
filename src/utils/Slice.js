import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const Slice = createSlice({
  name: 'counter',
  initialState:{
    name:"",
  },
  reducers: {
    setname:(state,action)=>{
      state.name=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setname } = Slice.actions

export default Slice.reducer