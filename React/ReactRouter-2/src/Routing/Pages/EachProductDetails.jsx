import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';


const EachProductDetails = () => {

  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProductData() {
      try {
        let data = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(data)
        setProduct(data.data)
      } catch (e) {
        console.log(e);
      }
    }
    fetchProductData();
  },[id])

  return (
    <div>
      <img src={product.images?.[0]} alt="" />
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.brand}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default EachProductDetails