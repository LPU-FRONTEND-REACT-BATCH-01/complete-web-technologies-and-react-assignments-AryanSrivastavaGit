import React from 'react'
import { Outlet, NavLink } from 'react-router'

const ProductLayout = () => {
    return (
        <div className='productLayoutNav'>
            <div>
                <div><NavLink to={'beauty'}>Beauty</NavLink></div>
                <div><NavLink to={'fragrances'}>Fragrance</NavLink></div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default ProductLayout