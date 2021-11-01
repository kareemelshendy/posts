import React, { createContext, useEffect, useReducer } from "react"
import { postReducer } from "../reducers/postReducer"

export const PostContext = createContext()

const PostsContextProvider = (props) => {
  const [posts, dispatch] = useReducer(postReducer, [], () => {
    const postData = localStorage.getItem("Posts")
    return postData ? JSON.parse(postData) : []
  }) 

  useEffect(() => {
    localStorage.setItem("Posts", JSON.stringify(posts))
  }, [posts])
  
  return <PostContext.Provider value={{ posts, dispatch }}>{props.children}</PostContext.Provider>
}

export default PostsContextProvider
