import React, { useContext, useEffect, useReducer, useState } from "react"
import { useParams, withRouter } from "react-router"
import { PostContext } from "../contexts/PostsContext"
import Page from "./utilities/Page"

function EditPost(props) {
  const [requestCount, setrequestCount] = useState(0)
  const { posts, dispatch } = useContext(PostContext)
  const { id } = useParams()
  const [state, editDispatch] = useReducer(ourReducer, {}, () => {
    const postData = posts[id - 1]
    return postData ? postData : {}
  })
  
  function ourReducer(state, action) {
    switch (action.type) {
      case "titleChange":
        return {
          id: state.id,
          title: action.value,
          author: state.author,
          conten: state.content,
          createdAt: state.createdAt,
        }
      case "AuthorChange":
        return {
          id: state.id,
          title: state.title,
          author: action.value,
          conten: state.content,
          createdAt: state.createdAt,
        }
      case "contentChange":
        return {
          id: state.id,
          title: state.title,
          author: state.author,
          content: action.value,
          createdAt: state.createdAt,
        }
      default:
        return state
    }
  } 

  function handleSubmit(e) {
    e.preventDefault()
    setrequestCount((requestCount) => requestCount + 1)
  }

  useEffect(() => {
    if (requestCount) {
      dispatch({ type: "EDIT_POST", value: { id: id, post: state } })
      props.history.push("/posts")
    }
  },[requestCount])

  return (
    <Page title="Edit Post">
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Edit Post</h2>
          {posts && (
            <form action="" className="form" onSubmit={handleSubmit}>
              <div className="mt-2">
                <div className="form__group">
                  <label className="form__group-label" htmlFor="title">
                    Title
                  </label>
                  <input onChange={(e) => editDispatch({ type: "titleChange", value: e.target.value })} value={state.title} className="form__group-input" type="text" placeholder="Add title" />
                </div>
                <div className="form__group">
                  <label className="form__group-label" htmlFor="Author">
                    Author
                  </label>
                  <input onChange={(e) => editDispatch({ type: "AuthorChange", value: e.target.value })} value={state.author} className="form__group-input" type="text" placeholder="Add Author" />
                </div>
              </div>

              <div className="form__group mt-2">
                <label htmlFor="title" className="form__group-label">
                  Content
                </label>
                <textarea onChange={(e) => editDispatch({ type: "contentChange", value: e.target.value })} value={state.content} className="form__group-textarea" name="" id="" cols="30" rows="10" placeholder="Add Content"></textarea>
              </div>
              <div className="form__button">
                <button type="submit" className="btn btn-noBorder  mt-2">
                  Edit Post
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </Page>
  )
}

export default withRouter(EditPost)
