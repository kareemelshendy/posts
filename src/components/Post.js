import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import StateContext from "../contexts/AppStateContext"

import postImage from "../img/post-img.jpg"
function Post(props) {
  const appState = useContext(StateContext)
  return (
    <div className="posts__card">
      <div className="posts__card-img">
        <img src={postImage} alt="" />
      </div>
      <Link to={`/edit/${appState.posts.indexOf(props.post)+1}`} className="posts__card-edit ">
        <i className="fas fa-pen"></i>
      </Link>
      <div className="posts__card-body">
        <div className="posts__card-author">
          <div>
            <i className="fas fa-user"></i>
            <h4>{props.post.author}</h4>
          </div>
          <p>{props.post.createdAt}</p>
        </div>
        <div className="posts__card-title mt-1 mb-1">
          <h3>{props.post.title}</h3>
        </div>
        <div className="posts__card-content mb-1">
          <p>{props.post.content}</p>
        </div>
        <Link className="posts__card-link " to="/posts">
          see more <i className="fas fa-greater-than"></i>
        </Link>
      </div>
    </div>
  )
}

export default Post
