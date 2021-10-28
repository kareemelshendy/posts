import React from "react"
import { withRouter } from "react-router"
import { useContext } from "react/cjs/react.development"
import Page from "./utilities/Page"
import PostFormInput from "./utilities/PostFormInput"
import StateContext from '../contexts/AppStateContext'
import DispatchContext from'../contexts/AddDispatchContext'
function AddPost(props) {
  
const appState = useContext(StateContext)
const appDispatch = useContext(DispatchContext)
  return (
    <Page title="addPost">
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Add Post</h2>
          <PostFormInput appState={appState} appDispatch={appDispatch}  />
        </div>
      </section>
    </Page>
  )
}

export default withRouter(AddPost)
