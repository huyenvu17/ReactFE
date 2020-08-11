import React, { Component, PureComponent } from 'react'
import ChildComponent_Pure from './ChildComponent_Pure'
import ChildComponent from './ChildComponent'

export default class PureComponentDemo extends Component {
  state = {
    number: 1,
    user: {
      id: 1,
      name: 'Minh'
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="display-4">{this.state.number}</h1>
        <button className="display-4 btn btn-success"
        onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
        }}
        >
          +
        </button>
        <button
         //className="display-4 btn btn-primary"
         onClick={()=> {

           let newUser = this.state.user;
           newUser.name = 'Hoang';
           this.setState({
             user: newUser
           }, console.log("clicked"))
         }}>Change Name</button>
        <h3>pure component user: {this.state.user.name}</h3>
        <ChildComponent  user={{...this.state.user}}/>
      </div>
    )
  }
}
