import React from "react";

const ChiTietSanPham = () => {
  return (
    <div className="flex max-w-3xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
      {/* Hình ảnh */}
      <div className="w-1/3">
        <img className="object-cover h-full w-full" />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-2/3 p-6">
        <p className="text-sm text-gray-400 mb-1">Mã sản phẩm: </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">tên</h2>
        <p className="text-lg text-blue-600 font-medium mb-4">giá₫</p>
        <p className="text-gray-600 text-sm leading-relaxed">mô tả</p>
      </div>
    </div>
  );
};

export default ChiTietSanPham;
