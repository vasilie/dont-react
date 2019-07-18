import React from 'react'
import PropTypes from 'prop-types'

import LatestArticles from '../components/LatestArticles.js'
import axios from 'axios'

class Main extends React.Component {
  state = {
    posts: []
  }
  vaskoMethod = () => {
    return "vasko";
  }
  componentDidMount(){
    axios.get(`https://api.lesverygoods.fr/pages/posts`)
    .then(res => {
        const posts = res.data.data;
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
    return (
      <div style={containerStyle} className="container">
        The Main Container mothafuckers
        { this.state.posts.map((post, index) => (<LatestArticles key={index} post={post} />)) }
      </div>
    )
  }
}

Main.propTypes = {
  posts: PropTypes.array
}

export default Main;
