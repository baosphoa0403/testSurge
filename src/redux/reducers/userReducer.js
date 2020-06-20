// cái gì thay đổi thì sẽ lưu ở state
let initialState = {
    mangSanPham: [
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
      ],
      detailProduct: { maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: 'AMOLED, 6.2", Full HD+',
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg"},
      mangGioHang: []
}
// const timViTri = () => {
    
// }
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL_PRODUCT":
            state.detailProduct = action.data;
            return {...state}
        case "ADD_PRODUCT":
            //  console.log(action);
            let mangGiohangCapNhat = [...state.mangGioHang]
            const sanPham = {
                maSP: action.data.maSP,
                tenSP: action.data.tenSP,
                hinhAnh: action.data.hinhAnh,
                soLuong: 1,
                giaBan: action.data.giaBan
            }
            let index = mangGiohangCapNhat.findIndex((product)=>{
                return product.maSP === sanPham.maSP
            })
            if (index !== -1) {
                mangGiohangCapNhat[index].soLuong++;
            }else{
                mangGiohangCapNhat.push(sanPham);
            }
            state.mangGioHang = mangGiohangCapNhat;
            return {...state}
        default:
            break;
    }
    
    return {...state};
}

export default userReducer