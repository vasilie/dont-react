import React from 'react'
import PropTypes from 'prop-types'

class ImgElement extends React.Component {
  getResolution = () => {
   var url = this.props.url;
   var resolution = this.props.res;
   url = url.split("[WBFORMAT]");
   var final_url = url[0] + resolution + url[1];
   return final_url;
  }
  render () {
    var imgStyle = {
      width:"100%",
    }
    return (
      <img style={imgStyle} src={this.getResolution()} />
    )
  }
}

export default ImgElement;
