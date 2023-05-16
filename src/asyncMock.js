const products = [
    {
        id: '1',
        name: 'Remera Capitán América',
        price: 2000,
        category: "remeras",
        img: 'https://i.postimg.cc/DZqpTCQR/rem-captamerica.jpg',
        stock: 28,
        description: 'Remera Capitán América color azul'

    },
    {
        id: '2',
        name: 'Taza Messi',
        price: 1800,
        category: "tazas",
        img: 'https://i.postimg.cc/LXRBzmf0/taza-messi.jpg',
        stock: 20,
        description: 'Taza Que miras bobo?'
    },
    {
        id: '3',
        name: 'Gorra Star Wars',
        price: 2000,
        category: "gorras",
        img: 'https://i.postimg.cc/VLTqKqnt/gorra-starwars.jpg',
        stock: 25,
        description: 'Gorra Star Wars color negro y blanco'
    },
    {
        id: '4',
        name: 'Remera Nonpalidece',
        price: 2500,
        category: "remeras",
        img: 'https://i.postimg.cc/9fbNY2PK/remera-nonpalidece.jpg',
        stock: 28,
        description: 'Remera de Nonpalidece, disco llamado Activistas'

    },
    {
        id: '5',
        name: 'Taza River',
        price: 1800,
        category: "tazas",
        img: 'https://i.postimg.cc/Bvht98cg/taza-river.jpg',
        stock: 20,
        description: 'Taza del Club Atlético River Plate'
    },
    {
        id: '6',
        name: 'Taza Boca',
        price: 2000,
        category: "tazas",
        img: 'https://i.postimg.cc/FFTk5BGv/taza-boca.jpg',
        stock: 25,
        description: 'Taza del Club Atlético Boca Juniors'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = (productsId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        }, 500)
    }
    )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(cat => cat.category === categoryId))
        },500)
    })
}