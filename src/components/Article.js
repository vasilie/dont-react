import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../scss/components/article.scss';

class Article extends React.Component {
  getUrl = () => {
    return "/article/" + "ar_" +this.props.item.id;
  }
  render () {


    return (
     <Link to={this.getUrl()}>
       <div className="article">
         <div className="article-media">
           <img className="article-img" src="http://placehold.it/300x300" />
           <div className="article-media-content">
             <p>{this.props.item.title }</p>
           </div>
         </div>
         <div className="article-content">
            <p>{this.props.item.body}</p>
         </div>
       </div> 
     </Link>
    )
  }
}

export default Article;
