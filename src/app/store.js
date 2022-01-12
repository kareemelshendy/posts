import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../featuers/CardSlice"
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    
  },
})