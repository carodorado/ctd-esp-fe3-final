import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../public/images/logo.png';
import sun from '../public/images/sun.png';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const changeTheme = (e) => {
    document.querySelector('#page').classList.toggle('dark');
  }

  

  return ( 
      <header className="Nav-bar">
             {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <img src={ logo } alt="Logo"/>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/favs">Favorites</Link></li>
          </ul>
        </nav>
        <button onClick={(e) => changeTheme(e)}><img id="image" src= { sun }></img></button>  
      </header>    

  )
}

export default Navbar