import React, { useState } from 'react'
import { productsData } from '../data/products'
import { Link, useNavigate } from 'react-router-dom'

function ProductsPage() {
  
    const [products, setproducts] = useState(productsData)

    const navigate = useNavigate();
    
  
  return (<>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Units In Stock</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((item, key) => {
                    return <tr key={key}>
                        <td><Link to={'/products/' + item.id}>{item.id}</Link></td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice.toFixed(2)}</td>
                        <td>{item.unitsInStock}</td>
                        <td><button onClick={() => navigate(`/products/${item.id}`)}>Go to detail</button></td>
                    </tr>
                })
            }
        </tbody>
    </table>
  </>
  )
}

export default ProductsPage