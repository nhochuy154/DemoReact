import React from "react";

const GioHang = (props) => {
  const { gioHang, xoaGioHang, tangGiamSoLuong } = props;
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">🛒 Giỏ Hàng</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600">
            <th className="py-3 px-4">Tên Sản phẩm</th>
            <th className="py-3 px-4">Hình ảnh</th>
            <th className="py-3 px-4">Đơn giá</th>
            <th className="py-3 px-4">Số lượng</th>
            <th className="py-3 px-4">Thành tiền</th>
            <th className="py-3 px-4">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((gioHangSP, index) => {
            return (
              <tr key={index} className="border-b">
                <td className="py-3 px-4 font-medium">{gioHangSP.tenSP}</td>
                <td className="py-3 px-4">
                  <img
                    src={gioHangSP.hinhAnh}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 text-blue-600 font-semibold">
                  {gioHangSP.giaBan.toLocaleString()}₫
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        tangGiamSoLuong(gioHangSP.maSP, -1);
                      }}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{gioHangSP.soLuong}</span>
                    <button
                      onClick={() => {
                        tangGiamSoLuong(gioHangSP.maSP, 1);
                      }}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-3 px-4 font-semibold">
                  {(gioHangSP.soLuong * gioHangSP.giaBan).toLocaleString()}₫
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => {
                      xoaGioHang(gioHangSP.maSP);
                    }}
                    className="text-red-500 hover:underline"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Tổng cộng */}
      {/* <div className="text-right mt-6 text-lg font-semibold text-gray-800">
        Tổng tiền: <span className="text-blue-600">10000₫</span>
      </div> */}
    </div>
  );
};

export default GioHang;
