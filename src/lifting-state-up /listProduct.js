import React, { Component } from "react";
import Product from "./product";
import data from "./data.json"
class ListProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0]
    }
  }
  renderListProduct = () => {
    return this.state.listProduct.map((product, index)=>{
       return <Product key = {index} product={product} handleDetail={this.handleDetail}/>
    })
  }
  handleDetail = (product) => {
    this.setState({
      detailProduct: product
    })
    // console.log(product);
  }
  // porps của mình á là cái biến 
  // props của mình next là cái hàm 
  
  render() {
    let {detailProduct} = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.renderListProduct()}
          </div>
          <div className="row">
            <div className="col-5">
              <img style={{width:"100%"}} src={detailProduct.hinhAnh}/>
            </div>
            <div className="col-7">
            <h3>Thông số kỹ thuật</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <td>Màn hình: </td>
                    <td>{detailProduct.manHinh}</td>
                  </tr>
                  <tr>
                    <td scope="row">hệ điều hành: </td>
                    <td>{detailProduct.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td scope="row">Camera trước: </td>
                    <td>{detailProduct.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td scope="row">Camera sau: </td>
                    <td>{detailProduct.cameraSau}</td>
                  </tr>
                  <tr>
                    <td scope="row">Ram: </td>
                    <td>{detailProduct.ram}</td>
                  </tr>
                  <tr>
                    <td scope="row">Rom: </td>
                    <td>{detailProduct.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProduct;
