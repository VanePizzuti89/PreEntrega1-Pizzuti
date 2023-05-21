const products = [
    {
        id: '1',
        name: 'Remera Capitán América',
        price: 5500,
        category: "remeras",
        img: 'https://i.postimg.cc/3Ry8b4pv/rem-captamerica.jpg',
        stock: 15,
        description: 'Remera del Capitán América, color de fondo azul'
    },
    {
        id: '2',
        name: 'Taza Messi',
        price: 3000,
        category: "tazas",
        img: 'https://i.postimg.cc/3RDhZM5j/taza-messi.jpg',
        stock: 20,
        description: 'Taza de Messi con frase del Mundial 2022'
    },
    {
        id: '3',
        name: 'Gorra Star Wars',
        price: 2600,
        category: "gorras",
        img: 'https://i.postimg.cc/VLTqKqnt/gorra-starwars.jpg',
        stock: 25,
        description: 'Gorra de Star Wars color negro y blanco'
    },
    {
        id: '4',
        name: 'Remera Nonpalidece',
        price: 5500,
        category: "remeras",
        img: 'https://i.postimg.cc/9fbNY2PK/remera-nonpalidece.jpg',
        stock: 28,
        description: 'Remera de Nonpalidece, disco llamado Activistas, color amarrillo'

    },
    {
        id: '5',
        name: 'Taza River',
        price: 3000,
        category: "tazas",
        img: 'https://i.postimg.cc/8C6XKTcC/taza-river.jpg',
        stock: 20,
        description: 'Taza del Club Atlético River Plate'
    },
    {
        id: '6',
        name: 'Gorra Patricio Rey',
        price: 2600,
        category: "gorras",
        img: 'https://i.postimg.cc/7YrDdB88/gorra-losredondos.jpg',
        stock: 25,
        description: 'Gorra de Patricio Rey, color de fondo negro'
    },
    {
        id: '7',
        name: 'Remera Dragon Ball',
        price: 5500,
        category: "remeras",
        img: 'https://i.postimg.cc/9QQ1Jhfx/remera-dragonball.jpg',
        stock: 15,
        description: 'Remera de Dragon Ball, color naranja'
    },
    {
        id: '8',
        name: 'Taza Boca',
        price: 3000,
        category: "tazas",
        img: 'https://i.postimg.cc/kg2GVpYC/taza-boca.jpg',
        stock: 25,
        description: 'Taza del Club Atlético Boca Juniors'
    },
    {
        id: '9',
        name: 'Gorra Adidas',
        price: 2600,
        category: "gorras",
        img: 'https://i.postimg.cc/cLqZqXpG/gorra-adidas.jpg',
        stock: 25,
        description: 'Gorra de la marca Adidas, de color de fondo negro'
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