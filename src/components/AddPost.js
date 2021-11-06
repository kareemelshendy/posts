import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router"
import { addPost } from "../featuers/CardSlice"
import Page from "./utilities/Page"
import PostForm from "./utilities/PostForm"

function AddPost(props) {
  const posts = useSelector((state) => state.posts.value)
  const dispatch = useDispatch()

  function onSubmit(data) {
    const date = new Date()
    const createdAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    dispatch(
      addPost({
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title: data.title,
        author: data.author,
        content: data.content,
        createdAt: createdAt,
      })
    )
    props.history.push("/posts")
  }
  return (
    <Page title="addPost">
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Add Post</h2>
          <PostForm onSubmit={onSubmit} />
        </div>
      </section>
    </Page>
  )
}

export default withRouter(AddPost)
