import React from 'react'
import logo from '../assets/images/marvelLogo.png'
import { Button } from './Button'
import './Navbar.css'

export const Navbar = () => {

  return (
    <nav>
      <img src={logo} alt="marvel logo" className='navbar-img'/>
      <ul className='navbar-items'>
      <li>Home</li>
      <li>Carrito</li>
      <li>Perfil</li>
      <li>
        <Button text="registro"/>
      </li>
      <li>
      <Button text="login" outlined={true}/>
      </li>
      </ul>
    </nav>
  )
}
