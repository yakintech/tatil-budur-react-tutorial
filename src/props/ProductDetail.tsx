import React from 'react'

function ProductDetail(props: Props) {
    return (<>
        <h1>{props.name}</h1>
        <h1>{props.description}</h1>
        <h1>{props.price.toFixed(2)}</h1>

    </>
    )
}

export default ProductDetail


type Props = {
    name: string
    description: string
    price: number
}


// interface Product {
//     name: string
//     description: string
//     price: number
// }
// var newProduct : Product = {
//     name: "IPhone",
//     description: "Apple product",
//     price: 4400
// }