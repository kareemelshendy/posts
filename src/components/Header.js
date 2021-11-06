import React, {  } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import icon from "../img/logo.png"


function Header() {
 const posts = useSelector(state=>state.posts.value)
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
