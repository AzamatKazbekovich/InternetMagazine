import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Products.module.css";
import ProductItem from "../Components/ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    console.log(response.data);
  }

  useEffect(() => fetchProducts(), []);

  return (
    <div className={classes.page}>
      {products.map((p) => (
        <div className={classes.card}>
          <ProductItem
            key={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
