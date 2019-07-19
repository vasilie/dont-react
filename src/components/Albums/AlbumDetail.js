import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Photo from './Photo.js'
// import '../scss/components/article-detail.scss'


class AlbumDetail extends React.Component{
  state = {
    photos: [],

  }
  getId = () => {
    var url = this.props.location.pathname;
    var id = url.split("_")[1];
    return id;
  }

  componentDidMount(){
    axios.get(`http://www.somaku.com/photos?albumId=${this.getId()}`)
    .then(res => {
        const photos = res.data;

        this.setState({
           photos:photos,
        });
      })
  }
  render () {
    return (
      <div class='container main'>
        <h1>Album {this.getId()}</h1>
        {this.state.photos.map((photo, index) => (<Photo photo={photo} />))}
      </div>
    )
  }
}

export default AlbumDetail
