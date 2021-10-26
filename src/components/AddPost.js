import React, { useContext, useState } from "react"
import { withRouter } from "react-router"
import DispatchContext from "../AddDispatchContext"
import StateContext from "../AppStateContext"
import Page from "./Page"

function AddPost(props) {
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [content, setContent] = useState()
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  function handleSubmit(e) {
    e.preventDefault()
    const date = new Date()
    const createdAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} || ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    appDispatch({
      type: "addPost",
      value: {
        id: appState.posts.length,
        title,
        author,
        content,
        createdAt:createdAt
      },
    })
    props.history.push("/posts")
  }

  return (
    <Page title="addPost">
      <main>
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Add Post</h2>
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className="mt-2">
              <div className="form__group">
                <label className="form__group-label" htmlFor="title">
                  Title
                </label>
                <input onChange={(e) => setTitle(e.target.value)} className="form__group-input" type="text" placeholder="Add title" />
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
        </div>
      </section>
    </main>
    </Page>
    
  )
}

export default withRouter(AddPost)
