import React from 'react'

export default function FunctionProps(props) {
  return (
    <div>
      <h2>Stateless Component</h2>
      <div className="card text-left w-25 mr-4">
        <img className="card-img-top" src={props.pictureOne.srcImg} alt="img" />
        <div className="card-body">
          <h4 className="card-title">{props.pictureOne.name}</h4>
          <p className="card-text">{props.pictureOne.content}</p>
        </div>
      </div>
    </div>
  )
}
