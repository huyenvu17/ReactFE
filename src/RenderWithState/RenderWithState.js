import React, { Component } from 'react'

export default class RenderWithState extends Component {
  // this.state: thuộc tính chứa nhũng giá trị thay đổi khi người dùng thao tác trên giao diện
  // đây là thuộc tính có sẵn của component

  state = {
    isLogin: false,
  }

  //isLogin = false;
  userName = 'huyen';

  renderContent = () => {
    if(this.state.isLogin){
      return <p>Hello {this.userName}</p>
    }
    return <button onClick={() => {this.login();}}>login</button>
  }

  login = () => {
    let newState = {
      isLogin: true
    }
    // this.setState là phương thúc có sẵn của component làm 2 nhiệm vụ: 1. thay đổi giá trị state, 2. gọi giao diện chạy lại this.render
    // this.setState là phương thức bất đồng bộ
    this.setState(newState, () => {
      console.log(this.state)
    });
    this.render();
  }

  render() {
    return (
      <div className="mt-4">
        {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>login</button>} */}
        {this.renderContent()}
      </div>
    )
  }
}
