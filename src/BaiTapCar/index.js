import React, { Component } from "react";

class BaiTapCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgRedCar.jpg"
    };
  }
  handleChangeColor = (color) => {
      let img = "";
      switch (color) {
        case "red":
          img = "./img/imgRedCar.jpg";
          break;
          case "black":
          img = "./img/imgBlackCar.jpg"
          break;
          case "grey":
          img = "./img/imgSilverCar.jpg"
          break;
        default:
          break;
      }
      this.setState({
        img
      })
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Bài tập car</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>Please choose your favorite about car 'color</h3>
              <img
                className="img-fluid"
                src={this.state.img}
              />
            </div>
            <div className="col-6">
              <button className="btn btn-danger" onClick={()=>{this.handleChangeColor("red")}}>Red</button>
              <button className="btn btn-dark" onClick={()=>{this.handleChangeColor("black")}}>Black</button>
              <button className="btn btn-secondary" onClick={()=>{this.handleChangeColor("grey")}}>Grey</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapCar;
