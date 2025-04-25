import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./src/assets/phones/applephone.jpg",
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
      hinhAnh: "./src/assets/phones/vsphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraTruoc: "7 MP",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./src/assets/phones/meizuphone.jpg",
    },
  ],
  gioHang: [],
  checkExist: {},
  spChiTiet: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    themGioHang: (state, action) => {
      // Khi bấm cần gửi thông tin của sản phẩm lên
      // Gửi toàn bộ thông tin của sản phẩm lên
      // Chỉ gửi mỗi id sản phẩm
      // => Tìm xem sản phẩm cần bỏ giỏ hàng bên trong products
      // => find => thêm vào // +1
      //   */
      //   const spClick = action.payload;
      //   const spIndex = state.gioHang.findIndex(
      //     (item) => item.maSP === spClick.maSP
      //   );
      //   if (spIndex !== -1) {
      //     state.gioHang[spIndex].soLuong += 1;
      //   } else {
      //     state.gioHang.push({ ...spClick, soLuong: 1 });
      //   }
      //   */
      //   /*
      //   const spGioHang = { ...action.payload, soLuong: 1 };
      //   const checkExist = state.gioHang.findIndex(
      //     (item) => item.maSP === spGioHang.maSP
      //   );
      //   // Có sản phẩm hoặc undifined
      //   if (checkExist != -1) {
      //     // checkExist.soLuong += 1;
      //     state.gioHang[checkExist].soLuong += 1;
      //   } else {
      //     let gioHang = [...state.gioHang, spGioHang];
      //     state.gioHang = gioHang;
      //   }
      //   */

      // Lấy maSP kiểm tra xem có sản phẩm hay chưa
      let check = state.checkExist[action.payload.maSP];
      //true ==> đã có thuộc tính mang giá trị là maSP || false ==> undifined
      if (check) {
        // Sản phẩm đã có trong giỏ, chỉ cần tăng số lượng
        state.gioHang[check - 1].soLuong += 1;
      } else {
        // Sản phẩm chưa có, thêm vào giỏ hàng
        const spGioHang = { ...action.payload, soLuong: 1 };
        state.gioHang.push(spGioHang);
        state.checkExist[action.payload.maSP] = state.gioHang.length;
      }
    },

    xoaGioHang: (state, action) => {
      // action.payload gửi lên maSP
      let check = state.checkExist[action.payload];
      //
      if (check !== undefined) {
        // state.gioHang.splice(check - 1, 1);
        // Nếu có, xóa sản phẩm khỏi giỏ
        state.gioHang.splice(check, 1);
        // Xóa khỏi checkExist
        delete state.checkExist[action.payload];
        // Cập nhật lại chỉ mục cho các sản phẩm còn lại
        state.gioHang.forEach((item, index) => {
          state.checkExist[item.maSP] = index;
        });
      }
    },

    tangGiamSoLuong: (state, action) => {
      const { maSP, soLuong } = action.payload;
      const sp = state.gioHang.find((item) => item.maSP === maSP);
      if (sp) {
        sp.soLuong += soLuong;
        if (sp.soLuong < 1) {
          // Tự động xóa nếu số lượng < 1
          state.gioHang = state.gioHang.filter((item) => item.maSP !== maSP);
          // Xóa khỏi checkExist khi sản phẩm bị xóa
          delete state.checkExist[maSP];
        }
      }
    },

    xemChiTiet: (state, action) => {
      state.spChiTiet = action.payload;
    },
  },
});

export const { themGioHang, xoaGioHang, tangGiamSoLuong, xemChiTiet } =
  productSlice.actions;

export default productSlice.reducer;
