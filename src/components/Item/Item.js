import './Item.css'

const Item = ({id, name, price, img, stock, description}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                
                <h2 className='ItemHeader'> {name}</h2>
                <p className='ItemHeader'>Id: {id} </p>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>Precio: ${price}</p>
                <p className='Info'>Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                <button className='Option'>Ver detalle</button>
            </footer>
        </article>
    )

}

export default Item