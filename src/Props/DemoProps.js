import React, { Component } from 'react'
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps'
export default class Demoprops extends Component {
  render() {
    const pic = {
      srcImg: "https://picsum.photos/300/200",
      name: "random picture",
      content: "this is a random picture"
    }
    const pic1 = {
      srcImg: "https://randomwordgenerator.com/img/picture-generator/55e1dc404852a414f1dc8460962e33791c3ad6e04e50744172297ed2934ccc_640.jpg",
      name: "random picture 1",
      content: "this is a random picture 1"
    }
    return (
      <div className="container">
        <h1 className="text-center">Demo Props</h1>
        <ClassProps picture={pic}/><br/>
        <FunctionProps pictureOne={pic1} />
      </div>
    )
  }
}
