import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

class Header extends React.Component {
  render () {
    var headerStyle = {
      background: "red",
      color:"white",
      padding: "20px"
    }
    var linkStyle = {
      color: "white",
      margin: "0px 10px"
    }
    return (
      <header style={ headerStyle }>
        <Link style={ linkStyle } to="/">Home</Link>
        <Link style={ linkStyle } to="/articles">Articles</Link>
      </header>
    )
  }
}

export default Header;
