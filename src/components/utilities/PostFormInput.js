import React, { useState } from "react"
import { withRouter } from "react-router"

function PostFormInput(props) {
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [content, setContent] = useState()
  let id = 1
  if (props.appState.posts.length > 0) {
    id = props.appState.posts[props.appState.posts.length-1].id + 1
  }
  function handleSubmit(e) {
    e.preventDefault()
    // Create Date
    const date = new Date()
    const createdAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} || ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    // Add post value to dispach
    props.appDispatch({
      type: "addPost",
      value: {
        id:id,
         title,
        author,
        content,
        createdAt: createdAt,
      },
    })
    props.history.push("/posts")
  }
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="mt-2">
        <div className="form__group">
          <label className="form__group-label" htmlFor="title">
            Title
          </label>
          <input autoFocus onChange={(e) => setTitle(e.target.value)} className="form__group-input" type="text" placeholder="Add title" />
        </div>
        <div className="form__group">
          <label className="form__group-label" htmlFor="Author">
            Author
          </label>
          <input onChange={(e) => setAuthor(e.target.value)} className="form__group-input" type="text" placeholder="Add Author" />
        </div>
      </div>
      <div className="form__group mt-2">
        <label htmlFor="title" className="form__group-label">
          Content
        </label>
        <textarea onChange={(e) => setContent(e.target.value)} className="form__group-textarea" name="" id="" cols="30" rows="10" placeholder="Add Content"></textarea>
      </div>
      <div className="form__button">
        <button type="submit" className="btn btn-noBorder  mt-2">
          Add Post
        </button>
      </div>
    </form>
  )
}

export default withRouter(PostFormInput)
