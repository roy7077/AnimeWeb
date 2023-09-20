import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const Slice = createSlice({
  name: 'counter',
  initialState:{
    items:[],
    name:"nobita",
    searchshow:false,
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
   closeshow:(state)=>{
    state.searchshow=false;
   },
   openshow:(state)=>{
    state.searchshow=true;
   }
  },
})

// Action creators are generated for each case reducer function
export const { setname ,additems,clearitems,removeitems,closeshow,openshow } = Slice.actions

export default Slice.reducer