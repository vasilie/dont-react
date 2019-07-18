import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import ImgElement from './ImgElement.js'
import custom from './Custom.js'

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
    axios.get(`https://api.lesverygoods.fr/pages/posts/${this.getId()}`)
    .then(res => {
        const post = res.data.data;

        this.setState({
           post:post,
           img:post.post_image.url,
           content:post.content
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
    var halfContainer = {
      width:"50%",
      display:"inline-block",
      verticalAlign:"top",
      color:"#333",
      textAlign:"left"
    }
    return (
      <div style={containerStyle}>
        <h1 style={hStyle}>{this.state.post.title} </h1>
        <div style={halfContainer}>
          <ImgElement url={this.state.img} res='550x400' />
        </div>
        <div style={halfContainer}>
          <p dangerouslySetInnerHTML={this.createMarkup(this.state.content.intro)}></p>
          <p dangerouslySetInnerHTML={this.createMarkup(this.state.content.intro2)}></p>
          <p dangerouslySetInnerHTML={this.createMarkup(this.state.content.guide)}></p>
        </div>
      </div>
    )
  }
}

export default ArticleDetail
