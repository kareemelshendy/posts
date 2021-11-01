import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "../contexts/PostsContext"
import Page from "./utilities/Page"
import Post from "./utilities/Post"

function ViewPosts() {
  const {posts} = useContext(PostContext)
  return (
    <Page title='Posts'>
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
              {posts.map((post) => {
                return <Post key={post.id} post={post} index={posts.indexOf(post)} />
              })}
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default ViewPosts
