import React, { Component } from 'react'

export default class EventBinding extends Component {
  handleClick = () => {
    alert("Hello world");
  }
  showMessage = (mess) => {
    alert("Hello " + mess);
  }
  render() {
    return (
      <div>
         {/* this.handleClick() -> binding function sẽ chạy khi load trang*/}
        <h3>Cách 1: truyền callback funciton xử lý sự kiện </h3>
        <button onClick={this.handleClick}>click me</button>
        {/* closure function */}
        <button onClick={this.showMessage.bind(this, 'cybersoft')}>click me</button>
        <br/>
        <h3>Cách 2: dùng arrow function</h3>
        {/* bên trong gọi phương thức/hàm để xử lý */}
        <button onClick={() => {
          this.handleClick();
        }}>click me 2</button>
        <button onClick={() => {
          this.showMessage("cybersoft");
        }}>show message</button>
      </div>
    )
  }
}
