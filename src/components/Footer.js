import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render () {
    var footerStyle = {
      background: "purple",
      color:"white"
    }
    return (
      <footer style = { footerStyle }>
        This is footer
      </footer>
    )
  }
}

export default Footer;
