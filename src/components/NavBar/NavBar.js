import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Modern Style</h3>
            <div className="categories">
                <button>Remeras</button>
                <button>Tazas</button>
                <button>Gorras</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar