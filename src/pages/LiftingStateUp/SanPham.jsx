import React from "react";

const SanPham = (props) => {
  const { sp, handleChangeSP, themGioHang } = props;
  return (
    <div className="max-w-sm mx-auto my-5 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={sp.hinhAnh}
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Card Title: {sp.tenSP}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Đây là phần mô tả ngắn
          {sp.cameraSau}
        </p>
        <button
          onClick={() => {
            handleChangeSP(sp);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Xem thêm
        </button>
        <button
          onClick={() => {
            // const gioHangMoi = [...gioHang, sp];
            themGioHang(sp);
          }}
          className="mx-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default SanPham;
