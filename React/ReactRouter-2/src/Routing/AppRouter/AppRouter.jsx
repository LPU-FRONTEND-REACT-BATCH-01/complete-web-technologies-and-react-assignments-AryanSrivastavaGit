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
import EachProductDetails from '../Pages/EachProductDetails'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'

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
                    path:'login',
                    element:<Login></Login>
                },
                {
                    path:'signup',
                    element:<SignUp></SignUp>
                },
                {
                    path:'profile',
                    element:<Profile></Profile>
                },
                {
                    path: 'products',
                    element: <ProductLayout></ProductLayout>,
                    children: [
                        {
                            index: true,
                            element: <Products />
                        },
                        {
                            path: ':category',
                            element: <ProductCategory></ProductCategory>
                        },
                        {
                            path:'category/:id',
                            element:<EachProductDetails></EachProductDetails>
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