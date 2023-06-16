import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount' 
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext} from '../../context/CartContext'


const ItemDetail = ({id, name, img, category, price, description, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id, name, price, img, stock}
        
        addItem(item, quantity)
    }

    return(
        <div className='card-padre'>
            <article className='CardItem'>
            <header className='Header'>
                <h3 className='ItemHeader'>{name}</h3>
            </header>
        <picture>
            <img src={img} alt={name} className='ItemImg'/>
        </picture>
        <section className='detail-card'> 
            <p className='Info'><b>Categoria:</b> {category}</p>
            <p className='Info'><b>Descripción:</b> {description}</p>
            <p className='Info'><b>Precio:</b> ${price}</p>
        </section>
        <footer className='ItemFooter'>
            {quantityAdded > 0 ? (<Link to='/cart' className='Option'>Finalizar compra</Link>) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
            )
        }
        </footer>
        </article>
        </div>        
    )
}


export default ItemDetail