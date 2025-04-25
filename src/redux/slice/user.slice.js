// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nguoiDung: {
    hoTen: "Huy",
    tuoi: 25,
  },
};

const userSlice = createSlice({
  // Đặt tên cho reducer
  name: "user",
  // Thực hiện lưu trữ dữ liệu mặc định trên store
  // object literal
  initialState,
  // Tạo các phương thức dispatch để thay đổi dữ liệu
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
