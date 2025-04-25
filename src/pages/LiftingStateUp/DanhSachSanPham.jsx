import React, { useState } from "react";
import SanPham from "./SanPham";
import ChiTietSanPham from "./ChiTietSanPham";
import GioHang from "./GioHang";
import { useDispatch, useSelector } from "react-redux";
import {
  themGioHang as themGioHangRedux,
  xoaGioHang,
  tangGiamSoLuong,
  xemChiTiet,
} from "./../../redux/slice/product.slice";

const DanhSachSanPham = () => {
  const { products, gioHang, spChiTiet } = useSelector(
    (state) => state.productSlice
  );
  const dispatch = useDispatch();

  // let [gioHang, setGioHang] = useState([
  //   {
  //     maSP: 3,
  //     tenSP: "Iphone XS Max",
  //     cameraSau: "Chính 12 MP & Phụ 12 MP",
  //     giaBan: 27000000,
  //     hinhAnh: "./src/assets/phones/meizuphone.jpg",
  //     soLuong: 1,
  //   },
  // ]);
  //   Hàm state đặt ở đâu thì hàm xử lý setState sẽ nằm trên component đó
  // const themGioHang = (spClick) => {
  //   // Tạo ra sản phẩm có số lượng
  //   const spGioHang = { ...spClick, soLuong: 1 };
  //   // Khi người dùng thêm sp vào giỏ hàng
  //   /*
  //    *TH1: Sản phẩm đã có trong giỏ hàng -> Lấy ra và tăng số lượng
  //    *TH2: Sản phẩm chưa tồn tại trong giỏ hàng -> thêm vào mảng giỏ hàng
  //    */
  //   const sp = gioHang.find((item) => item.maSP === spGioHang.maSP);
  //   if (sp) {
  //     sp.soLuong += 1;
  //   } else {
  //     gioHang = [...gioHang, spGioHang];
  //   }
  //   let gioHangUpdate = [...gioHang];
  //   setGioHang(gioHangUpdate);
  // };
  // const xoaGioHang = (maSPClick) => {
  //   let gioHangUpdate = [...gioHang.filter((item) => item.maSP !== maSPClick)];
  //   setGioHang(gioHangUpdate);
  // };
  // const tangGiamSoLuong = (maSPClick, soLuong) => {
  //   let sp = gioHang.find((item) => item.maSP === maSPClick);
  //   if (sp) {
  //     sp.soLuong += soLuong;
  //   }
  //   let gioHangUpdate = [...gioHang];
  //   setGioHang(gioHangUpdate);
  // };
  return (
    <div className="container">
      <h3 className="text-center">Danh Sách Sản Phẩm</h3>
      <GioHang
        gioHang={gioHang}
        xoaGioHang={(maSP) => dispatch(xoaGioHang(maSP))}
        tangGiamSoLuong={(maSP, soLuong) =>
          dispatch(tangGiamSoLuong({ maSP, soLuong }))
        }
      />
      <div className="grid grid-cols-3">
        {products.map((sp, index) => (
          <SanPham
            key={index}
            sp={sp}
            themGioHang={(sp) => dispatch(themGioHangRedux(sp))}
            xemChiTiet={() => dispatch(xemChiTiet(sp))}
          />
        ))}
      </div>
      <h3>Chi tiết sản phẩm</h3>
      {spChiTiet && <ChiTietSanPham spChiTiet={spChiTiet} />}
    </div>
  );
};

export default DanhSachSanPham;
