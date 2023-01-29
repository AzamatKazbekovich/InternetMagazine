import React from "react";
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  return (
    <div className={classes.cardpers}>
      <div><img src={props.image} width='100' height='100'/></div>
      <div>{props.title}</div> 
      <div>{props.price}</div> 
      <div>{props.category}</div>
    </div>
  );
};

export default ProductItem;
