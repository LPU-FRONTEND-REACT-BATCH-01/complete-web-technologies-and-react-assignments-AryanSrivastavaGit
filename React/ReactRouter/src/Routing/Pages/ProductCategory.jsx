import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Category from './Category';

const ProductCategory = () => {
    
    const useParam = useParams();
    const {category} = useParam;

    const [prodDataCategory, setProdDataCategory] = useState([]);

    useEffect(()=>{
        async function fetchingProductDataCategory() {
            try{
                let data = await axios.get(`https://dummyjson.com/products/category/${category}`);
                setProdDataCategory(data.data.products)
            }catch(e){
                console.log(e);
            }            
        }
        fetchingProductDataCategory();
    },[category])

  return (
    <div className='products'>
        {prodDataCategory.map((x)=><Category key={x.id} eachProd={x}></Category>)}
    </div>
  )
}

export default ProductCategory