import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log("id: ", id);
  return <div>Product Detail</div>;
};

export default ProductDetail;
