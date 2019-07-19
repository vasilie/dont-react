import React from 'react'
import PropTypes from 'prop-types'
import "../../scss/components/photo.scss"
import {Link} from "react-router-dom"

class Photo extends React.Component {
  getUrl = () => {
    return "/photo/" + "ph_" +this.props.photo.id;
  }
  render () {
    return (
      <Link to={this.getUrl()}>
      <div className="photo">
        <img src={this.props.photo.thumbnailUrl}/>
      </div>
      </Link>
    )
  }
}

export default Photo;
