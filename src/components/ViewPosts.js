import React, { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../AppStateContext"

import postImage from "../img/post-img.jpg"
import Page from "./Page"

function ViewPosts() {
  const AppState = useContext(StateContext)
  

  console.log(AppState.posts)

  return (
    <Page title="View Posts">
<main>
      <section id="home-1" className="mt-1 mb-4">
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
                //   const date = new Date(post.createdAt)
                //   const createdAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                return (
                  <div key={post.id} className="posts__card">
                    <div className="posts__card-img">
                      <img src={postImage} alt="" />
                    </div>
                    <Link to={`/edit/${post.id}`} className="posts__card-edit ">
                      <i className="fas fa-pen"></i>
                    </Link>
                    <div className="posts__card-body">
                      <div className="posts__card-author">
                        <div>
                          <i className="fas fa-user"></i>
                          <h4>{post.author}</h4>
                        </div>
                        <p>{post.createdAt}</p>
                      </div>
                      <div className="posts__card-title mt-1 mb-1">
                        <h3>{post.title}</h3>
                      </div>
                      <div className="posts__card-content mb-1">
                        <p>{post.content}</p>
                      </div>
                      <Link className="posts__card-link " to="">
                        see more <i className="fas fa-greater-than"></i>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
    </Page>
    
  )
}

export default ViewPosts
