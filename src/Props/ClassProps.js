import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    const {srcImg, name, content} = this.props.picture;
    return (
      <div >
        <h2>Stateful Component</h2>
        {/* nhận props srcImg từ component DemoProps */}
        {/* <div className="card text-left w-25">
          <img className="card-img-top" 
          src={this.props.srcImg} 
          alt="img" />
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{this.props.content}</p>
          </div>
        </div> */}
        <div className="d-flex">
        <div className="card text-left w-25 mr-4">
          <img className="card-img-top" 
          src={this.props.picture.srcImg} 
          alt="img" />
          <div className="card-body">
            <h4 className="card-title">{this.props.picture.name}</h4>
            <p className="card-text">{this.props.picture.content}</p>
          </div>
        </div>
        <div className="card text-left w-25">
          <img className="card-img-top" 
          src={srcImg} 
          alt="img" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{content}</p>
          </div>
        </div>
        </div>
      </div>

    )
  }
}
