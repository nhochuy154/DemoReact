import React from "react";
import { useSelector } from "react-redux";

const DemoRedux = () => {
  // Hooks useSelector
  // state giúp trỏ đến đúng chính xác thằng reducer cần chọn
  const dataRedux = useSelector((state) => {
    return state.userSlice;
  });
  const productDataRedux = useSelector((state) => {
    return state.productSlice;
  });
  console.log("dataRedux: ", dataRedux);
  console.log("productDataRedux: ", productDataRedux);
  return (
    <div>
      <p>{dataRedux.nguoiDung.hoTen}</p>
      <p>{dataRedux.nguoiDung.tuoi}</p>
      <p>{productDataRedux.maSP}</p>
      <p>{productDataRedux.tenSP}</p>
    </div>
  );
};

export default DemoRedux;
