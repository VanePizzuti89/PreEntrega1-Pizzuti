import './Item.css'
import { Link } from "react-router-dom"

const Item = ({id, name, price, img, stock}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                
                <h3 className='ItemHeader'> {name}</h3>
                
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <p className='ItemHeader'>Id: {id} </p>
            <section>
                <p className='Info'>Precio: ${price}</p>
                <p className='Info'>Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )

}

export default Item