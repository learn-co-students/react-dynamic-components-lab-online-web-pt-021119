import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return(
      <div className="colorbox">
        console.log({this.value.opacity})
        {this.value.opacity >= .02 ? <ColorBox opacity={this.value.opacity- .01}/> : null}
      </div>

    )
  }
}
