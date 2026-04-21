import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import HomeLayout from '../Layout/HomeLayout'
import Landing from '../Pages/Landing'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import About from '../Pages/About'
import ProductLayout from '../Layout/ProductLayout'
import Category from '../Pages/Category'
import ProductCategory from '../Pages/ProductCategory'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    // path:'landing',
                    index: true,
                    element: <Landing />
                },
                {
                    path: 'products',
                    element: <ProductLayout></ProductLayout>,
                    children:[
                        {
                            index:true,
                            element: <Products />
                        },
                        {
                            path: ':category',
                            element : <ProductCategory></ProductCategory>
                        }
                    ]
                },
                {
                    path: 'cart',
                    element: <Cart />
                },
                {
                    path: 'about',
                    element: <About />
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default AppRouter