import React, { Component } from "react";
import Modal from "./modal";
import DanhSachSanPham from "./danh-sach-san-pham";

class LiftingStateUpCart extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg"
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg"
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg"
    }
  ];

  constructor(props){
    super(props);
    this.state = {
      detailProduct: this.mangSanPham[0],
      mangGioHang: []
    }
  }
  handleDelete = (product) => {
    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(product.maSP)
    console.log(index);
    
    if (mangGioHang[index].soLuong > 1) {
      mangGioHang[index].soLuong--;
    }else{
      mangGioHang.splice(index, 1);
    }
    this.setState({
      mangGioHang
    })
  }

  handleDetail = (product) => {
   this.setState({
     detailProduct: product
   })
// state thay đổi thì giao diện render lại 
  }
  timViTri = (maSP) => {
    return this.state.mangGioHang.findIndex((sanPham)=>{
      return sanPham.maSP === maSP
    })
  }
  handleAddCard = (product) =>{
    const sanPham = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      soLuong: 1,
      giaBan: product.giaBan
    }
    
    // b0: đụng tới mảng vs object là nó bị cái tham chiếu nên mình phải copy lại cái mảng đó 
    let mangGioHang = [...this.state.mangGioHang];
    // b1 : tìm ví trí để kiểm tra có trong mảng chưa nếu có r thì tăng cái SLPT lên
    let index = this.timViTri(sanPham.maSP)
    // console.log(index);
    
    if (index !== -1) {
      this.state.mangGioHang[index].soLuong++;
    }else {
      mangGioHang = [...this.state.mangGioHang, sanPham];
    }
    //  nếu chưa có thì add zo 
    // b2 : setstate
    this.setState({
      mangGioHang
    })
    
  }
  handleTangGiam = (product, status) => {
      //  b0: copy lại cái mảng 
    let mangGioHang = [...this.state.mangGioHang]
    //  b1: tìm vị product
    let index = this.timViTri(product.maSP);
  //  b2: nếu mà status là true thì tăng
    if (status) {
      mangGioHang[index].soLuong++;
    }else{
       //  b3: nếu mà status false là giảm
     if (mangGioHang[index].soLuong > 1) {
      mangGioHang[index].soLuong--;
     }
    }
    
   this.setState({
     mangGioHang
   })
  }
  // tongSL
  tongSL = () => {
    return this.state.mangGioHang.reduce((sum, product)=>{
      return sum += product.soLuong;
    }, 0);
  }
  render() {
    let {detailProduct, mangGioHang} = this.state;
    return (
      <div className = "container">
        <button className="btn btn-danger" data-toggle="modal" data-target="#modelId">Giỏ hàng({this.tongSL()})</button>
        <DanhSachSanPham listProduct={this.mangSanPham} handleDetail={this.handleDetail} handleAddCard={this.handleAddCard}/>
        <Modal mangGioHang={mangGioHang} handleTangGiam={this.handleTangGiam} handleDelete={this.handleDelete} />
        <div className="row">
          <div className="col-5">
            <img src={detailProduct.hinhAnh}/>
          </div>
          <div className="col-7">
            <h3>Thông số kỹ thuật</h3>
            <table class="table">
              <tbody>
                <tr>
                  <td>Màn hình: {detailProduct.manHinh} </td>
                  
                </tr>
                <tr>
                  <td scope="row">hệ điều hành: {detailProduct.heDieuHanh} </td>
                  
                </tr>
                <tr>
                  <td scope="row">Camera trước: {detailProduct.cameraTruoc}</td>
                  
                </tr>
                <tr>
                  <td scope="row">Camera sau:{detailProduct.cameraSau} </td>
                  
                </tr>
                <tr>
                  <td scope="row">Ram:{detailProduct.ram} </td>
                
                </tr>
                <tr>
                  <td scope="row">Rom:{detailProduct.rom} </td>
                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default LiftingStateUpCart;
