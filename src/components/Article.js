import React from 'react'
import ImgElement from './ImgElement.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './article.css';

class Article extends React.Component {
  getUrl = () => {
    return "/article/" + "a_" +this.props.item.id;
  }
  render () {


    return (
     <Link to={this.getUrl()}>
       <div className="article">
         <div className="article-content">
           <p>{this.props.item.title }</p>
         </div>
         
          <ImgElement  url={this.props.item.post_image.url} res='530x390' />
       </div>
     </Link>
    )
  }
}

export default Article;
