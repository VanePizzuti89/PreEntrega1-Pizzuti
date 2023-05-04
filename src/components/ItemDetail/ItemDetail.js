import './ItemDetail.css'


const ItemDetail = ({ id, name, img, category, price, description, stock}) => {
    return(
        
        <article className='CardItem'>
            <header className='Header'>
                <h3 className='ItemHeader'>{name}</h3>
            </header>
        <picture>
            <img src={img} alt={name} className='ItemImg'/>
        </picture>
        <section>
            <p className='Info'>Id: {id}</p>
            <p className='Info'>Categoria: {category}</p>
            <p className='Info'>Descripción: {description}</p>
            <p className='Info'>Precio: {price}</p>
            <p className='Info'>Stock: {stock}</p>
            
        </section>
        
        </article>
    )
}

export default ItemDetail