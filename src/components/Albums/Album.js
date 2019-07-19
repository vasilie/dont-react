import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "../../scss/components/album.scss"

class Album extends React.Component {
  getUrl = () => {
    return "/album/" + "al_" +this.props.item.id;
  }
  render () {
    return (
      <Link to={this.getUrl()}>
      <div className="album">

        <p className="album-item"><b>{this.props.item.id}</b> - {this.props.item.title}</p>
      </div>
      </Link>
    )
  }
}

export default Album;
