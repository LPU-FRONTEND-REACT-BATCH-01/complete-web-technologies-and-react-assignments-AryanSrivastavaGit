import React from 'react'
import { NavLink } from 'react-router'

// const Navbar = () => {
//   return (
//     <nav>
//         <Link to={'landing'}>Landing</Link>
//         <Link to={'products'}>Products</Link>
//         <Link to={'about'}>About</Link>
//         <Link to={'cart'}>Cart</Link>
//     </nav>
//   )
// }
// export default Navbar


// const Navbar = () => {
//   return (
//     <nav>
//         <NavLink to={'landing'}>Landing</NavLink>
//         <NavLink to={'products'}>Products</NavLink>
//         <NavLink to={'about'}>About</NavLink>
//         <NavLink to={'cart'}>Cart</NavLink>
//     </nav>
//   )
// }
// export default Navbar


// const Navbar = () => {
//   return (
//     <nav>
//         <NavLink to={'/'}>Landing</NavLink>
//         <NavLink to={'products'}>Products</NavLink>
//         <NavLink to={'about'}>About</NavLink>
//         <NavLink to={'cart'}>Cart</NavLink>
//     </nav>
//   )
// }
// export default Navbar



import { Link } from 'react-router'
import puma from '../../assets/puma.png'
const Navbar = () => {
    return (
        <nav>
            <div>
                <p>Free Delivery on order above 999rs.</p>
            </div>
            <div>
                <div className='pumaLogo'>
                    <NavLink to={'/'}>
                        <img src={puma} alt="puma"/>
                    </NavLink>
                </div >
                <div className='menu'>
                    <div>
                        <p><NavLink to={'/'}>Home</NavLink></p>
                        <p><NavLink to={'products'}>Products</NavLink></p>
                        <p><NavLink to={'cart'}>Cart</NavLink></p>
                        <p><NavLink to={'about'}>About</NavLink></p>
                    </div>
                </div>
                <div className='searchBar'></div>
                <div className='logos'></div>
            </div>
        </nav>
    )
}

export default Navbar