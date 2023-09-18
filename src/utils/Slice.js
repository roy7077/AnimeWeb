import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const Slice = createSlice({
  name: 'counter',
  initialState:{
    items:[],
    name:"",
  },
  reducers: {
    setname:(state,action)=>{
      state.name=action.payload;
    },

    additems:(state,action)=>{
      if(state.items.includes(action.payload)===false)
      {
       state.items.push(action.payload);
      }
      
   },
   removeitems:(state,action)=>{

      // state.items=[];
       let cnt=0;
       state.items.map((data)=>{
           if(data==action.payload)
           {
               state.items.splice(cnt, 1);

           }
           cnt++;
       })
   },
  
   clearitems:(state)=>{
       state.items=[];
   },
  },
})

// Action creators are generated for each case reducer function
export const { setname ,additems,clearitems,removeitems } = Slice.actions

export default Slice.reducer