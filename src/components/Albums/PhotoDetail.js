import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Photo from './Photo.js'
// import '../scss/components/article-detail.scss'


class PhotoDetail extends React.Component{
  state = {
    item: [],

  }
  getId = () => {
    var url = this.props.location.pathname;
    var id = url.split("_")[1];
    return id;
  }

  componentDidMount(){
    axios.get(`http://www.somaku.com/photos/${this.getId()}`)
    .then(res => {
        const item = res.data;

        this.setState({
           item:item,
        });
      })
  }
  render () {
    return (
      <div class='container main'>
        <h1>Photo {this.state.item.id}</h1>
        <img src={this.state.item.url} />
        <p>{this.state.item.title} </p>
      </div>
    )
  }
}

export default PhotoDetail
