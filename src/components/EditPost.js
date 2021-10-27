import React, { useContext, useEffect, useReducer, useState } from "react"
import { useParams, withRouter } from "react-router"
import DispatchContext from "../contexts/AddDispatchContext"
import StateContext from "../contexts/AppStateContext"
import Page from "./Page"

function EditPost(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const { id } = useParams()
  
  const intialValue = {
    post: {
      id: id,
      title: "",
      author: "",
      content: "",
      createdAt: ''
    },
    
  }
  function ourReducer(state, action) {
    switch (action.type) {
      case "getPostData":
        return {
          post: action.value,
        }
      case "titleChange":
        return {
          post: {
            id: state.post.id,
            title: action.value,
            author: state.post.author,
            conten: state.post.content,
            createdAt: state.post.createdAt,
          },
        }
      case "AuthorChange":
        return {
          post: {
            id: state.post.id,
            title: state.post.title,
            author: action.value,
            conten: state.post.content,
            createdAt: state.post.createdAt,
          },
        }
      case "contentChange":
        return {
          post: {
            id: state.post.id,
            title: state.post.title,
            author: state.post.author,
            content: action.value,
            createdAt: state.post.createdAt,
          },
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(ourReducer, intialValue)
  const [requestCount, setrequestCount] = useState(0)

  useEffect(() => {
    if(appState.posts[id-1] ){

      dispatch({ type: "getPostData", value: appState.posts[id-1] })
    }
  }, [appState])

  useEffect(() => {
    if (requestCount) {
      appDispatch({ type: "editPost", value: { id: id, post: state.post } })
      console.log( state.post,requestCount)
      props.history.push("/posts")
    }
  }, [requestCount])

  // Submit button
  function handleSubmit(e) {
    e.preventDefault()
    setrequestCount(prev => prev +1)
    
  }

  return (
    <Page title="Edit Post">
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Edit Post</h2>
          {appState.posts && (
            <form action="" className="form" onSubmit={handleSubmit}>
              <div className="mt-2">
                <div className="form__group">
                  <label className="form__group-label" htmlFor="title">
                    Title
                  </label>
                  <input onChange={(e) => dispatch({ type: "titleChange", value: e.target.value })} value={state.post.title} className="form__group-input" type="text" placeholder="Add title" />
                </div>
                <div className="form__group">
                  <label className="form__group-label" htmlFor="Author">
                    Author
                  </label>
                  <input onChange={(e) => dispatch({ type: "AuthorChange", value: e.target.value })} value={state.post.author} className="form__group-input" type="text" placeholder="Add Author" />
                </div>
              </div>

              <div className="form__group mt-2">
                <label htmlFor="title" className="form__group-label">
                  Content
                </label>
                <textarea onChange={(e) => dispatch({ type: "contentChange", value: e.target.value })} value={state.post.content} className="form__group-textarea" name="" id="" cols="30" rows="10" placeholder="Add Content"></textarea>
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
