import React, { Component } from "react";

export default class Product extends Component {
  render() {
    // bóc tách
   let {product} = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button className="btn btn-danger" onClick={()=>{this.props.handleDetail(product)}}>chi tiết </button>
          </div>
        </div>
      </div>
    );
  }
}
