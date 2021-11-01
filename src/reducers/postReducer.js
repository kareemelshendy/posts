export const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.value]
    case "EDIT_POST":
      const index = action.value.id - 1
      const updatedPost = action.value.post
      const updatedPosts = [...state]
      updatedPosts[index] = updatedPost
      return updatedPosts

    case "DELETE_POST":
      // return state.filter((post) => post.id !== action.value)
      const deletedPosts = [...state]
      deletedPosts.splice(action.value, 1)
      return deletedPosts

    default:
      return state
  }
}
