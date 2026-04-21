import React, { useEffect, useState } from 'react'
import Category from './Category'
import axios from 'axios'

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    async function fetchProductData() {
      try{
        let data = await axios.get("https://dummyjson.com/products");
        setProduct(data.data.products)
      }catch(e){
        console.log(e);
      }
    }
    fetchProductData();
  },[])
  return (
    <div className='products'>
      {product.map((x)=><Category key={x.id} eachProd={x}></Category>)}
    </div>
  )
}

export default Products