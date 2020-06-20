import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderTable = () => {
    return this.props.listProduct.map((product, index) => {
      return (
        <SanPham
          product={product}
          key={index}
          handleDetail={this.props.handleDetail}
          handleAddCard={this.props.handleAddCard}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderTable()}</div>
      </div>
    );
  }
}
