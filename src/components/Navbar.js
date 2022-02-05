import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>

                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li >
                        <Link to="/cart" className='cartCustomStyle'>My cart <i className="material-icons" style={{ paddingLeft: '10px' }}>shopping_cart</i>
                            <span className="cartItems">{props.cartItems.length}</span>
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default connect(
    (state) => ({
        cartItems: state.addedItems
    }), {}
)(Navbar);