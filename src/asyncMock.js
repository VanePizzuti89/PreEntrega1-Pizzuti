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
        price: 2000,
        category: "remeras",
        img: 'https://http2.mlstatic.com/D_NQ_NP_775187-MLA31128313558_062019-O.webp',
        stock: 28,
        description: 'Remera de la banda Nonpalidece, del disco llamado Activistas'

    },
    {
        id: '5',
        name: 'Taza Messi',
        price: 1800,
        category: "tazas",
        img: 'https://i.postimg.cc/LXRBzmf0/taza-messi.jpg',
        stock: 20,
        description: 'Taza Que miras bobo?'
    },
    {
        id: '6',
        name: 'Gorra Star Wars',
        price: 2000,
        category: "gorras",
        img: 'https://i.postimg.cc/VLTqKqnt/gorra-starwars.jpg',
        stock: 25,
        description: 'Gorra Star Wars color negro y blanco'
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