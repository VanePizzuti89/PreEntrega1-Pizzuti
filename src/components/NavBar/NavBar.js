import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink , Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
            <img className="logo_alm" src="./images/logo-am.png" alt="logo"/>    
            
            </Link>
            
            <div className="categories">
            <NavLink to="/category/remeras" className="nav__link link">Remeras</NavLink>
            <NavLink to="/category/tazas" className="nav__link link">Tazas</NavLink>
            <NavLink to="/category/gorras" className="nav__link link">Gorras</NavLink>
            <NavLink to="/cart" className="nav__link link"><CartWidget/></NavLink>
                
            </div>
            
        </nav>
    )
}
export default NavBar