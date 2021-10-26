import React, { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../AppStateContext"
import icon from "../img/logo.png"


function Header() {
  const appState= useContext(StateContext)
  
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <Link to="/" className="header__logo">
            <img src={icon} alt="" />
          </Link>
          <Link to='/posts' className="header__posts">Posts ({appState.posts.length})</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
