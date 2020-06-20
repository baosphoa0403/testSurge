import React, { Component } from "react";
import SanPham from "./product";

export default class DanhSachSanPham extends Component {
  renderContent = () => {
    return this.props.mangSanPham.map((product, index)=>{
      return <SanPham  key={index} product={product}/>
    })
  }
  render() {    
    return (
      <div className="container">
        <div className="row">
        {this.renderContent()}
        </div>
      </div>
    );
  }
}
