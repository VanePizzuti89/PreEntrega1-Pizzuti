import './ItemDetail.css'


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
        <section>
            
            <p className='Info'>Categoria: {category}</p>
            <p className='Info'>Descripción: {description}</p>
            <p className='Info'>Precio: {price}</p>
            
            
        </section>
        
        </article>

        </div>

        
    )
}


export default ItemDetail