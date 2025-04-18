import React from "react";
import SanPham from "./SanPham";
import ChiTietSanPham from "./ChiTietSanPham";

const DanhSachSanPham = () => {
  return (
    <div className="container">
      <h3 className="text-center">Danh Sách Sản Phẩm</h3>
      <div className="grid grid-cols-3">
        <SanPham />
        <SanPham />
        <SanPham />
      </div>
      <h3>Chi tiết sản phẩm</h3>
      <ChiTietSanPham />
    </div>
  );
};

export default DanhSachSanPham;
