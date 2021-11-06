import { createSlice } from "@reduxjs/toolkit"

const localData = localStorage.getItem("Posts")
const initialState = {
  value: localData ? JSON.parse(localData) : [],
}

export const CardSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload)
      localStorage.setItem("Posts", JSON.stringify(state.value))
    },
    removePost: (state, action) => {
      state.value.splice(action.payload, 1)
      localStorage.setItem("Posts", JSON.stringify(state.value))
    },
    updatePots: (state, action) => {
      const index = action.payload.id - 1
      const updatedPost = action.payload.post
      const updatedPosts = [...state.value]
      updatedPosts[index] = updatedPost
      state.value = updatedPosts
      localStorage.setItem("Posts", JSON.stringify(state.value))
    },
  },
})

export const { addPost, removePost, updatePots } = CardSlice.actions
export default CardSlice.reducer
