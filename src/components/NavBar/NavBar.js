import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
            <h1 className="header__title">Modern Style</h1>
            </NavLink>
            
            <nav className="header__nav">
            <NavLink to="/category/1" className="header__link link">Categoria 1</NavLink>
            <NavLink to="/category/2" className="header__link link">Categoria 2</NavLink>
            <NavLink to="/cart" className="header__link link"><CartWidget/></NavLink>
                
            </nav>
            
            
           
        </header>
    )
}
export default Header