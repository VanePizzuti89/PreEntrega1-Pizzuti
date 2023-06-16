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

                <div className="sti-cat">
                <NavLink to="/category/remeras" className="nav__link link">REMERAS</NavLink>
                </div>
                <div className="sti-cat">
                <NavLink to="/category/tazas" className="nav__link link">TAZAS</NavLink>
                </div>
                <div className="sti-cat">
                <NavLink to="/category/gorras" className="nav__link link">GORRAS</NavLink>
                </div>
                <div className="sti-carri">
                <NavLink to="/cart" className="nav__link link"><CartWidget/></NavLink>
                </div>
            
            </div>
            
        </nav>
    )
}
export default NavBar