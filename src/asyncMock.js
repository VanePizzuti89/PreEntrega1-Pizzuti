const products = [
    {
        id: '1',
        name: 'Remera Capitán América',
        price: 2000,
        category: "remeras",
        img: 'https://www.google.com.ar/imgres?imgurl=https%3A%2F%2Fd2r9epyceweg5n.cloudfront.net%2Fstores%2F904%2F250%2Fproducts%2Fpic_20190609_095731-390e0b4fb82f0e6fd215600852123526-1024-1024.jpg&tbnid=LSZre_rkrBERqM&vet=12ahUKEwj0p5u_-df-AhV4kZUCHddPCTcQMygBegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.piepequeno.com.ar%2Fproductos%2Fremera-capitan-america-manga-larga-corta%2F&docid=My29Wzr1nAopiM&w=1024&h=960&q=remera%20capitan%20america&ved=2ahUKEwj0p5u_-df-AhV4kZUCHddPCTcQMygBegUIARD2AQ',
        stock: 28,
        description: 'Descripcion de Remera Capitán América'

    },
    {
        id: '2',
        name: 'Taza Messi',
        price: 1800,
        category: "tazas",
        img: 'https://www.google.com.ar/imgres?imgurl=http%3A%2F%2Fd3ugyf2ht6aenh.cloudfront.net%2Fstores%2F001%2F594%2F854%2Fproducts%2Fmirabobo21-1387499557aab55edd16719242100641-640-0.webp&tbnid=zVYVkUICwcRaAM&vet=12ahUKEwje1tzD-tf-AhXdu5UCHaCeAeUQMyhSegUIARDtAQ..i&imgrefurl=https%3A%2F%2Fwww.enmana3d.com%2Fproductos%2Ftaza-que-miras-bobo-messi-anda-pa-alla%2F&docid=2Dym-lYMp5eOXM&w=640&h=640&q=taza%20messi%20que%20miras%20bobo&ved=2ahUKEwje1tzD-tf-AhXdu5UCHaCeAeUQMyhSegUIARDtAQ',
        stock: 20,
        description: 'Descripcion de Taza Messi'
    },
    {
        id: '3',
        name: 'Gorra Star Wars',
        price: 2000,
        category: "gorras",
        img: 'https://www.google.com.ar/imgres?imgurl=https%3A%2F%2Fd22fxaf9t8d39k.cloudfront.net%2F0f27842544b109c3517419c833bab46c5563c7c63206231f59c177721e21b14a4378.jpeg&tbnid=uNJSOUbKM9Ge8M&vet=12ahUKEwi1nrmm-tf-AhWQrJUCHRbSDvUQMygCegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.espiralesdetinta.com.ar%2Fgorras-trucker%2Fgorra-trucker-star-wars&docid=Gc5cObe-WFarHM&w=600&h=600&q=gorra%20star%20wars&ved=2ahUKEwi1nrmm-tf-AhWQrJUCHRbSDvUQMygCegUIARD2AQ',
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
            resolve(products.find(cat => cat.category === categoryId))
        },500)
    })
}