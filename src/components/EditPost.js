import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, withRouter } from "react-router"

import { updatePots } from "../featuers/CardSlice"
import Page from "./utilities/Page"
import PostForm from "./utilities/PostForm"

function EditPost(props) {
  const posts = useSelector((state) => state.posts.value)
  const dispatch = useDispatch()
  const { id } = useParams()
  const post = posts[id - 1]

  function onSubmit(data) {
    dispatch(
      updatePots({
        id: id,
        post: {
          id: post.id,
          title: data.title,
          author: data.author,
          content: data.content,
          createdAt: post.createdAt,
        },
      })
    )
    props.history.push("/posts")
  }

  return (
    <Page title="Edit Post">
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Edit Post</h2>
          {posts && <PostForm postData={post} onSubmit={onSubmit} />}
        </div>
      </section>
    </Page>
  )
}

export default withRouter(EditPost)
