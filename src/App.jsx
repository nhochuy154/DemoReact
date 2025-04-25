// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import DemoState from "./components/DemoState.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import DemoTemplate from "./templates/DemoTemplate.jsx";
import HomeTemplate from "./templates/HomeTemplate.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetail from "./pages/productDetail/ProductDetail.jsx";
import DanhSachSanPham from "./pages/LiftingStateUp/DanhSachSanPham.jsx";
import DemoRedux from "./pages/demoRedux/DemoRedux.jsx";

// BEM (Block Element Modifier)
function App() {
  const products = [
    {
      name: "iPhone 14 Pro Max",
      price: 30000000,
      description: "Điện thoại cao cấp của Apple.",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/320730/TimerThumb/xiaomi-redmi-note-14-pro-(12).jpg",
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      price: 28000000,
      description: "Flagship của Samsung với bút S-Pen.",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
    },
    {
      name: "Google Pixel 7 Pro",
      price: 22000000,
      description: "Camera AI hàng đầu từ Google.",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/333480/TimerThumb/honor-x9c-smart-(6).jpg",
    },
    {
      name: "Google Pixel 7 Pro",
      price: 22000000,
      description: "Camera AI hàng đầu từ Google.",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/333480/TimerThumb/honor-x9c-smart-(6).jpg",
    },
    {
      name: "Google Pixel 7 Pro",
      price: 22000000,
      description: "Camera AI hàng đầu từ Google.",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/333480/TimerThumb/honor-x9c-smart-(6).jpg",
    },
  ];
  const routes = useRoutes([
    {
      path: "/demo",
      element: <div>Hello BC82</div>,
    },
    {
      path: "/",
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/demo-state",
          element: <DemoState />,
        },
        {
          path: "/dtdd/:id",
          element: <ProductDetail />,
        },
        {
          path: "/productcard",
          element: <ProductCard products={products} />,
        },
        {
          path: "/danh-sach-san-pham",
          element: <DanhSachSanPham />,
        },
        {
          path: "/demo-redux",
          element: <DemoRedux />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
}

export default App;
// SPA (Single Page Application)
//
