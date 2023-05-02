const products = [
    {
        id: '1',
        name: 'Remera Capitán América',
        price: 2000,
        category: "remeras",
        img: <img className="rem-capamer" src="/images/rem-captamerica.jpg" alt="remera capitan america"/>,
        stock: 28,
        description: 'Descripcion de Remera Capitán América'

    },
    {
        id: '2',
        name: 'Taza Messi',
        price: 1800,
        category: "tazas",
        img: <img className="taza-messi" src="/images/taza-messi.jpg" alt="taza messi"></img>,
        stock: 20,
        description: 'Descripcion de Taza Messi'
    },
    {
        id: '3',
        name: 'Gorra Star Wars',
        price: 2000,
        category: "gorras",
        img: <img className="gorra-starwars" src="/images/gorra-starwars.jpg" alt="gorra star wars"></img>,
        stock: 25,
        description: 'Descripcion de Gorra Star Wars'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}