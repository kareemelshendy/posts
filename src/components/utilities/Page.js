import React, { useEffect } from "react"
import Container from "./Container"
import PropTypes from 'prop-types';

function Page(props) {
  
  useEffect(() => {
    document.title = `${props.title}`
    window.scrollTo(0, 0)
  }, [props.title])
  return <Container>{props.children}</Container>
}

export default Page

Page.propTypes = {
  title: PropTypes.string
}
