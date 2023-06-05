import './CartWidget.css'
import cart from './assets/carrito.png'
import { useContext} from 'react'
import { CartContext } from '../../context/CartContext'
//import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            <img className='img-carrito' src={cart} alt='carrito-widget'/>
            { totalQuantity() }
        </>  
    )
}

export default CartWidget