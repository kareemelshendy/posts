import React from "react"

function Container(props) {
  return (
    <div className="overall__container">
        {props.children}
    </div>
  )
}

export default Container