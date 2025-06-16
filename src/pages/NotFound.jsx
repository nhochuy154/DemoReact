import React from "react";
import { Link, Outlet } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-9xl text-center text-red-500">
        Lỗi 404 Web site không tồn tại
      </h1>
      <Link to="/" className="py-2 px-5 bg-amber-500 ">
        Quay về trang chủ hello
      </Link>
    </div>
  );
};

export default NotFound;
