import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productsData } from '../data/products'

function ProductDetailPage() {

    //use params hook ile url deki parametreLER alınabilir!
    const { id } = useParams()

    const navigate = useNavigate()


    var detail = productsData.find(x => x.id == Number(id ?? 0));


    return (<>
        <button onClick={() => navigate(-1)}>Go Back!</button>
        {
            detail ? <>
                <h1>Id: {detail?.id}</h1>
                <h1>Name: {detail?.name}</h1>
                <h1>Price: {detail?.unitPrice}</h1>
                <h1>Category Id: {detail?.categoryId}</h1>
                <h1>Supplier Id: {detail?.supplierId}</h1>
            </> : <> <h1>Product not found!</h1></>
        }

    </>
    )
}

export default ProductDetailPage