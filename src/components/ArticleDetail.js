import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import ImgElement from './ImgElement.js'
import custom from './Custom.js'
import '../scss/components/article-detail.scss'


class ArticleDetail extends React.Component{
  state = {
    post: [],
    img: "",
    content: {}
  }
  getId = () => {
    var url = this.props.location.pathname;
    var id = url.split("_")[1];
    return id;
  }
  createMarkup = (html) => {
    return {__html: html};
  }
  componentDidMount(){
    custom.helloVaske();
    axios.get(`http://www.somaku.com/posts/${this.getId()}`)
    .then(res => {
        const post = res.data;

        this.setState({
           post:post,
        });
      })
  }
  render () {
    var hStyle = {
      color:"#333",
      marginBottom:"50px"
    }
    var containerStyle = {
      width:"100%",
      maxWidth:"1200px",
      margin:"0 auto",
      padding:"0 30px"

    }
    return (
      <div class='container main'>
        <h1>{this.state.post.title} </h1>
        <br />
        <div class='article-half'>
          <img src="http://placehold.it/550x400" />
        </div>
        <div class='article-half' >
          <p>{this.state.post.body}</p>
        </div>
      </div>
    )
  }
}

export default ArticleDetail
