import React from 'react'
import PropTypes from 'prop-types'

import LatestArticles from '../components/LatestArticles.js'
import Article from '../components/Article.js'
import axios from 'axios'

class Main extends React.Component {
  state = {
    posts: []
  }
  vaskoMethod = () => {
    return "vasko";
  }
  componentDidMount(){
    axios.get(`http://www.somaku.com/posts`)
    .then(res => {
        const posts = res.data;
        console.log(posts);
        this.setState({ posts:posts });
      })
  }
  render () {
    var containerStyle = {
      width:"100%",
      maxWidth:"1200px",
      margin:"0 auto",
      padding:"0 30px"
    }
    var mainHeading = {
      color: "#333",
      textAlign: "left",
      padding: "1%",
      marginTop: "30px"
      
    }
    return (
      <div style={containerStyle} className="container main">
        <h1 style={mainHeading} >Don't React</h1>
        { this.state.posts.map((item, index) => (<Article key={index} item={item} />)) }
      </div>
    )
  }
}

Main.propTypes = {
  posts: PropTypes.array
}

export default Main;
