import React from "react"

function Container(props) {
  return (
    <div className="overall__container">
      <main>{props.children}</main>
    </div>
  )
}
export default Container
