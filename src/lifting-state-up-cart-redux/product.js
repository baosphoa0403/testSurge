import React, { Component } from "react";
import {connect} from "react-redux";
 class SanPham extends Component {
 
  render() {
    let {product} = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh}alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button className="btn btn-success"onClick={()=>{this.props.detailProduct(product)}}>Chi tiết</button>
            <button className="btn btn-danger" onClick={()=>{this.props.addProduct(product)}}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
   return {
     detailProduct: (product) => {
        let action = {
          type: "GET_DETAIL_PRODUCT",
          data: product
        }
        // console.log(action);
        dispatch(action);
     },
     addProduct:  (product) => {
        let action = {
          type: "ADD_PRODUCT",
          data: product
        }
        dispatch(action)
     }
   }
}
export default connect(null, mapDispatchToProps)(SanPham);