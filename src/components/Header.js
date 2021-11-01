import React, {  } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { PostContext } from "../contexts/PostsContext"
import icon from "../img/logo.png"


function Header() {
 const {posts} = useContext(PostContext)
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <Link to="/" className="header__logo">
            <img src={icon} alt="" />
          </Link>
          <Link to='/posts' className="header__posts">Posts ({posts.length}) </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
