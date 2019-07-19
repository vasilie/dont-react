import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/header.scss'
import logo from '../logo.svg';

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
      <header class='header' >
        <div className="container">
          <img className="App-logo" src= { logo } />
          <div className="nav">
            <Link style={ linkStyle } to="/">Home</Link>
            <Link style={ linkStyle } to="/articles">Articles</Link>
            <Link style={ linkStyle } to="/albums">Albums</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
