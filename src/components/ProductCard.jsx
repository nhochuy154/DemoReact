import React from "react";

export default function ProductCard({ products }) {
  const renderProducts = () => {
    return products.map((product, index) => (
      <div
        className="product__item"
        key={index}
        onClick={() => {
          alert("Xem chi tiết sản phẩm");
        }}
      >
        <h3 className="product__name">{product.name}</h3>
        <img
          className="product__image"
          src={product.image}
          alt={product.name}
        />
        <p className="product__price">
          Giá: {product.price.toLocaleString()} VND
        </p>
        <span>Giảm 20%</span>
        <p className="product__description">{product.description}</p>
        <button
          onClick={() => {
            alert("Xem chi tiết sản phẩm");
          }}
          className="product__btn--details"
        >
          Xem chi tiết
        </button>
      </div>
    ));
  };

  return (
    <section className="products">
      <h2 className="products__title">Danh sách sản phẩm</h2>
      <div className="product__list">{renderProducts()}</div>
    </section>
  );
}
