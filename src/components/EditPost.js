import React, { useContext, useEffect, useReducer } from "react"
import { useParams, withRouter } from "react-router"
import DispatchContext from "../AddDispatchContext"
import StateContext from "../AppStateContext"

function EditPost(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const { id } = useParams()
  const intialValue = {
    id: id,
    title: "",
    author: "",
    content: "",
    createdAt: appState[id].createdAt,
    requestCount:0
  }
  // console.log(appState.posts[id])
  function ourReducer(state, action) {
    switch (action.type) {
      case "getPostData":
        return (state = action.value)
      case "titleChange":
        return{
          id:state.id,
          title:action.value,
          author:state.author,
          conten:state.content,
          createdAt:state.createdAt,
          requestCount:state.requestCount
        }
        case 'AuthorChange':
          return{
            id:state.id,
            title:state.title,
            author:action.value,
            conten:state.content,
            createdAt:state.createdAt,
            requestCount:state.requestCount
          }
        case 'contentChange':
          return{
            id:state.id,
            title:state.title,
            author:state.author,
            conten:action.value,
            createdAt:state.createdAt,
            requestCount:state.requestCount
          }
         case 'submit':
           return{
            id:state.id,
            title:state.title,
            author:state.author,
            conten:state.content,
            createdAt:state.createdAt,
            requestCount:state.requestCount++
           } 
      default:
        break
    }
  }
  const [state, dispatch] = useReducer(ourReducer, intialValue)

  useEffect(() => {
    dispatch({ type: "getPostData", value: appState[id] })
  }, [])

  useEffect(()=>{
    if(state.requestCount){
      appDispatch({type:'editPost', value:{title:state.title,id:state.id,author:state.author,content:state.content,createdAt:state.createdAt}})
    }
  },[state.requestCount])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type:'submit'})
    props.history.push('/posts')
    console.log(state)
  }




  return (
    <main>
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Edit Post</h2>
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className="mt-2">
              <div className="form__group">
                <label className="form__group-label" htmlFor="title">
                  Title
                </label>
                <input onChange={(e) => dispatch({ type: "titleChange", value: e.target.value })} value={state.title} className="form__group-input" type="text" placeholder="Add title" />
              </div>
              <div className="form__group">
                <label className="form__group-label" htmlFor="Author">
                  Author
                </label>
                <input onChange={(e) => dispatch({ type: "AuthorChange", value: e.target.value })} value={state.author} className="form__group-input" type="text" placeholder="Add Author" />
              </div>
            </div>

            <div className="form__group mt-2">
              <label htmlFor="title" className="form__group-label">
                Content
              </label>
              <textarea onChange={(e) => dispatch({ type: "contentChange", value: e.target.value })} value={state.content} className="form__group-textarea" name="" id="" cols="30" rows="10" placeholder="Add Content"></textarea>
            </div>
            <div className="form__button">
              <button type="submit" className="btn btn-noBorder  mt-2">
                Edit Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default withRouter(EditPost)
