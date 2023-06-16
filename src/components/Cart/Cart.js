import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity() === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Prod-sti'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <Item key={p.id} {...p}/>)}  
            <div className='center-part'>
                
            <h3>Total: ${total()}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>

            </div>
            
        </div>
    )
}

export default Cart