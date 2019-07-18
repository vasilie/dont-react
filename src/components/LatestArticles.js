import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article.js'

class LatestArticles extends React.Component {
  render () {
    return (
      <div>
      { this.props.post.items.map((item, index) => (<Article key={item.id} item={item} />)) }
      </div>
    )
  }
}

export default LatestArticles;
