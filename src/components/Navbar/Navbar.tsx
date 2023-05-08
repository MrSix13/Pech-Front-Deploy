import React from 'react'
import { HiHome, HiShoppingCart, HiHeart, HiMenu, HiUser } from "react-icons/hi";
import './navbar.css'

const Navbar: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><HiHome />Home</li>
                    <li><HiShoppingCart />Carrito</li>
                    <li><HiHeart />Favoritos</li>
                    <li><HiMenu />Categorias</li>
                    <li><HiUser /> <br />Acceso Usuarios</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar