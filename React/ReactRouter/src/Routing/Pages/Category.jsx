import React, { useEffect, useState } from 'react'

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
        <p>{eachProd.description}</p>
      </div>
      <button>View more</button>
    </div>
  )
}

export default Category