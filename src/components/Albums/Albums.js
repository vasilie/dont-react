import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Album from './Album.js'

class Albums extends React.Component {
  state = {
    albums: []
  }
  componentDidMount(){
    axios.get(`http://www.somaku.com/albums`)
    .then(res => {
        const albums = res.data;
        console.log(albums);
        this.setState({ albums:albums });
      })
  }
  render () {
    return (
      <div class='container main'>
        <h1>Albums </h1>
        {this.state.albums.map((album, index) => (<Album item={album}/>) )}
      </div>
    )
  }
}

export default Albums;
