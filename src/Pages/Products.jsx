import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Products.module.css";
import ProductItem from "../Components/ProductItem";
import Navbar from "../Components/Navbar";
import MyInput from '../Components/UI/Input/MyInput'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  


  useEffect(() => {
    async function fetchProducts() {
      return await axios.get("https://fakestoreapi.com/products")
    }
    fetchProducts().then((response) => {
      const { data } = response
      setProducts(data)
      setCurrentProducts(data)

      const categories = []
      data.forEach((p)=>{if(!categories.includes(p.category)){
        categories.push(p.category)
       }
       setCategories(categories)
      })
    })
  }
    , []);

    useEffect(()=>{
      if(category){
        const filteredProducts = products.filter((p)=>p.category===category)
        setCurrentProducts(filteredProducts)
      }
    },[category, products])

  return (
    <div className={classes.page}>
      <Navbar />
      <div>
        <MyInput />
      </div>
      <div className={classes.select}>
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option disabled value={''}>All category</option>
          {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>
      </div>
      <hr />
      <div className={classes.pageproducts}>
        {currentProducts.map((p) => (
          <div className={classes.card}>
            <ProductItem
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              category={p.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
