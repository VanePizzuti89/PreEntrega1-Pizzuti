const products = [
    {
        id: '1',
        name: 'Remera Capitán América',
        price: 5500,
        category: "remeras",
        img: 'https://i.postimg.cc/bwy88Gsg/reme-capamerica.png',
        stock: 15,
        description: '100% algodón peinado. Talles desde S hasta XL.'
    },
    {
        id: '2',
        name: 'Taza Messi',
        price: 3000,
        category: "tazas",
        img: 'https://i.postimg.cc/3RDhZM5j/taza-messi.jpg',
        stock: 11,
        description: 'Taza de cerámica, con capacidad de 350 cc.'
    },
    {
        id: '3',
        name: 'Gorra Star Wars',
        price: 2600,
        category: "gorras",
        img: 'https://i.postimg.cc/VLTqKqnt/gorra-starwars.jpg',
        stock: 18,
        description: '100% Poliéster. Visera precurvada.'
    },
    {
        id: '4',
        name: 'Remera Nonpalidece',
        price: 5500,
        category: "remeras",
        img: 'https://i.postimg.cc/9fbNY2PK/remera-nonpalidece.jpg',
        stock: 28,
        description: '100% algodón peinado. Talles desde S hasta XL.'

    },
    {
        id: '5',
        name: 'Taza River Plate',
        price: 3000,
        category: "tazas",
        img: 'https://i.postimg.cc/q7k59bDJ/taza-river.png',
        stock: 20,
        description: 'Taza de cerámica, con capacidad de 350 cc.'
    },
    {
        id: '6',
        name: 'Gorra Patricio Rey',
        price: 2600,
        category: "gorras",
        img: 'https://i.postimg.cc/90Qzrxf8/gorra-prey.png',
        stock: 13,
        description: '100% Poliéster. Visera precurvada.'
    },
    {
        id: '7',
        name: 'Remera Dragon Ball Z',
        price: 5500,
        category: "remeras",
        img: 'https://i.postimg.cc/9QQ1Jhfx/remera-dragonball.jpg',
        stock: 16,
        description: '100% algodón peinado. Talles desde S hasta XL.'
    },
    {
        id: '8',
        name: 'Taza Starbucks',
        price: 3000,
        category: "tazas",
        img: 'https://i.postimg.cc/c4Hy5pjk/taza-sturbucks.png',
        stock: 25,
        description: 'Taza de cerámica, con capacidad de 350 cc.'
    },
    {
        id: '9',
        name: 'Gorra Adidas',
        price: 2600,
        category: "gorras",
        img: 'https://i.postimg.cc/C59YSJnf/gorra-adidas.png',
        stock: 12,
        description: '100% Poliéster. Visera precurvada.'
    },
    {
        id: '10',
        name: 'Remera The Rolling Stones',
        price: 5500,
        category: "remeras",
        img: 'https://i.postimg.cc/NjmRtQ2Y/remera-stones.jpg',
        stock: 13,
        description: '100% algodón peinado. Talles desde S hasta XL.'
    },
    {
        id: '11',
        name: 'Taza Homero',
        price: 3000,
        category: "tazas",
        img: 'https://i.postimg.cc/brP1dM7W/taza-homero.png',
        stock: 12,
        description: 'Taza de cerámica, con capacidad de 350 cc.'
    },
    {
        id: '12',
        name: 'Gorra Metallica',
        price: 2600,
        category: "gorras",
        img: 'https://i.postimg.cc/Rhx2hSVm/gorra-metallica.png',
        stock: 10,
        description: '100% Poliéster. Visera precurvada.'
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