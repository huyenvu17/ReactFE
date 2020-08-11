import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {
  constructor(props){
    super(props);
    console.log('constructor');
    this.state = {
      number: 1
    }
  }

  static getDerivedStateFromProps(props, state){ // props mới và state hiện tại'
    console.log('getDerivedStateFromProps')
    return null; // trả về state mới
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.number}
        <button onClick={() => {
          this.setState({number: this.state.number+1})
        }}>+</button>
      </div>
    )
  }
  // chạy sau khi render
  componentDidMount(){
    console.log('componentDidMount')

  }
  
  componentDidUpdate(prevProps, prevState){
    //prevProps: là props mới, prevState: state mới
    // chạy sau render và chạy khi state hoăc props thay đổi
    // lưu ý: không setState trong life cycle này sẽ đi vào lặp vô tận
    console.log('componentDidUpdate')

  }
  componentWillUnmount(){
    // chạy khi component bị xoá khỏi giao diện
    console.log('componentWillUnmount')
  }
}
