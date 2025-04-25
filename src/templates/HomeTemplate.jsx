import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;
// const items = Array.from({ length: 15 }).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const arrNavLink = [
  {
    title: "Trang chủ",
    to: "/",
  },
  {
    title: "Demo State",
    to: "/demo-state",
  },
  {
    title: "ProductDetail",
    to: "/dtdd/:id",
  },
  {
    title: "ProductCard",
    to: "/productcard",
  },
  {
    title: "DanhSachSanPham ",
    to: "/danh-sach-san-pham",
  },
  {
    title: "DemoRedux",
    to: "/demo-redux",
  },
];
const HomeTemplate = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{ display: "flex", alignItems: "center" }}
        className="space-x-3"
      >
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
        {/* <Link to="/">Quay về trang chủ</Link> */}
        {/* <Link to="/demo-state">Demo State</Link> */}
        {arrNavLink.map((item, index) => (
          <NavLink
            key={index}
            to={item.to} // Giả sử mỗi item có field `path`
            className={({ isActive }) =>
              isActive ? "!text-red-500" : "!text-white"
            }
          >
            {item.title} {/* Giả sử mỗi item có field `label` */}
          </NavLink>
        ))}
      </Header>

      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
