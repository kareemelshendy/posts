import React from "react"
import { withRouter } from "react-router"
import Page from "./utilities/Page"
import PostFormInput from "./utilities/PostFormInput"
function AddPost() {
  return (
    <Page title="addPost">
      <section id="addpost" className="mt-2 mb-2">
        <div className="container">
          <h2>Add Post</h2>
          <PostFormInput />
        </div>
      </section>
    </Page>
  )
}

export default withRouter(AddPost)
