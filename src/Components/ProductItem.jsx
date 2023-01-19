import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      {props.title} {props.price} {props.description} {props.category}
    </div>
  );
};

export default ProductItem;
