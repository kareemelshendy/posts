import React, { useContext } from "react"
import Page from "./Page"

import postImage from "../img/post-img.jpg"
import StateContext from "../contexts/AppStateContext"
import { Link } from "react-router-dom"

function Home() {
  const appState = useContext(StateContext)
  const post = appState.posts[appState.posts.length - 1]
  return (
    <Page title="Home" >
      <section id="singlePost" className="mt-2 mb-2">
        <div className="container">
          <div className="post">
            <div className="post__top">
              <h2>Latest Post</h2>
              <Link to="/posts">Post({appState.posts.length})</Link>
            </div>
            {post ? (
              <div className="post__card mt-2">
                <img className="post__card-img" src={postImage} alt="" />
                <div className="post__card-body">
                  <div>
                    <div className="post__card-title mt-1 mb-1">
                      <h3>{post.title}</h3>
                    </div>
                    <div className="post__card-content mb-1">
                      <p>{post.content}</p>
                    </div>
                  </div>

                  <div className="post__card-author">
                    <div>
                      <i className="fas fa-user"></i>
                      <h4>{post.author}</h4>
                    </div>
                    <p>{post.createdAt}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-2">no Post Yet</div>
            )}
            <div className="post__btn mt-2">
              <Link to="/posts" className={`btn ${appState.posts.length ? " " : "display"}`}>
                {" "}
                seeMore{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Home
