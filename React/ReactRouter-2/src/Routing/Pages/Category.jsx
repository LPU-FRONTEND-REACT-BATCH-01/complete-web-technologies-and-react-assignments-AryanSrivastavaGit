import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

const Category = ({ eachProd }) => {
  return (
    <div className='category'>
      <div>
        <img src={eachProd.images[0]} alt="" />
      </div>
      <div>
        <p>{eachProd.price}</p>
        <p>{eachProd.category}</p>
        <p>{eachProd.brand}</p>
        <p>{eachProd.title}</p>
      </div>
      <button>
        <NavLink to={`/products/category/${eachProd.id}`}>View more</NavLink>
      </button>
    </div>
  )
}

export default Category