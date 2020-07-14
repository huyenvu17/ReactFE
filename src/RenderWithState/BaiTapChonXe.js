import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

  state = {
    imgSource: './img/black-car.jpg'
  }
  renderImageByColor = (color) => {
    // switch(color){
    //   case 1:
    //     this.setState({imgSource: './img/red-car.jpg'});
    //     break;
    //     case 2:
    //     this.setState({imgSource: './img/silver-car.jpg'});
    //     break;
    //     case 3:
    //     this.setState({imgSource: './img/steel-car.jpg'});
    //     break;
    //     case 4:
    //     this.setState({imgSource: './img/black-car.jpg'});
    //     break;
    //    default:
    //     this.setState({imgSource: './img/black-car.jpg'});
    //     break;
    // }
    let imgColor = `./img/${color}-car.jpg`;
    this.setState({
      imgSource: imgColor
    })
  } 
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <h3>Please choose your favourite car's color</h3>
            <img src={this.state.imgSource} alt="car" className="img-fluid" />
          </div>
          <div className="col-6">
              <h3>Change color</h3>
              <div className="row">
                <div className="col-3"><button className="btn btn-danger" onClick={() => this.renderImageByColor('red')}>Red Color</button></div>
                <div className="col-3"><button className="btn btn-secondary" style={{backgroundColor: '#ddd', borderColor: '#ddd', color: '#000'}} onClick={() => this.renderImageByColor('silver')}>Silver Color</button></div>
                <div className="col-3"><button className="btn btn-secondary"  onClick={() => this.renderImageByColor('steel')}>Steel Color</button></div>
                <div className="col-3"><button className="btn btn-dark" onClick={() => this.renderImageByColor('black')}>Black Color</button></div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
