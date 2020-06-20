import React, { Component } from "react";

export default class RenderingElement extends Component {
  //attribute
  name = "FPT";
  lop = "SE";
  // method
  RenderingElement = (mssv) => {
    // tag HTML
    return (
      <div>
         <h3>RENDERING ELEMENTS</h3>
         <p>name: {this.name}</p>
         <p>lop: {this.lop}</p>
         <p>mssv: {mssv}</p>
      </div>
    );
  };
  render() {
    let mssv = "se140647" // biến 
    return (
      <div>
       {this.RenderingElement(mssv)}
       
      </div>
    );
  }
}
