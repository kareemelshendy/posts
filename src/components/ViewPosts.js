import React, { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../contexts/AppStateContext"
import Page from "./Page"
import Post from "./Post"

function ViewPosts() {
  const AppState = useContext(StateContext)

  console.log(AppState.posts)

  return (
    <Page title="View Posts">
      <section id="home-1" className="mt-2 mb-4">
        <div className="container">
          <div className="posts">
            <div className="posts__top">
              <h2>Posts</h2>
              <Link className="posts__top-link" to="/addpost">
                Add Posts
              </Link>
            </div>
            <div className="posts__cards mt-2">
              {AppState.posts.map((post) => {
                return <Post key={post.id} post={post} />
              })}
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default ViewPosts
