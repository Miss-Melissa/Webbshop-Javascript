import React from 'react'
import CartIcon from '../images/cart-shopping.svg'
import { Link } from 'react-router-dom'
import '../styles/Header.css'



function Header() {

  return (
    <header>
      <div className="header--logo">
        <Link to="/">MEZA</Link>
      </div>

      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/products/">Products</Link></li> 
        </ul>

       
       
      </nav>

      <div className="nav--cart">
          <span>0</span>
          <img className='shoppingcart-img' src={CartIcon} alt="" width="20px" />
        </div>
    </header>

  )

}

export default Header