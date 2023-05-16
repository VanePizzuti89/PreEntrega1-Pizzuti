import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount' 


const ItemDetail = ({ name, img, category, price, description, stock}) => {
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
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/> 
             
        </section>
          
        </article>
        
        </div>

        
    )
}


export default ItemDetail