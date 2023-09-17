import { configureStore } from '@reduxjs/toolkit'
import Slice from './Slice'

const store = configureStore({
  reducer: {
    counter:Slice,
  },
})

export default store;