import { Button } from '@mui/material'
import { DataGrid, GridColDef, trTR } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContextType, favContext } from '../context/FavoritesContext'
import { CartContext, CartContextType, CartItem } from '../context/CartContext'

function DataGridProducts() {

    const [products, setproducts] = useState<Product[]>([])
    const [loading, setloading] = useState(true)

    const { favorites, setfavorites } = useContext(favContext) as FavoritesContextType
    const { cart, setcart } = useContext(CartContext) as CartContextType

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
                setloading(false)
            })
    }

    const deleteProduct = (id: string) => {

        setloading(true);


        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                loadProducts();
            })
            .catch(err => {
                console.log(err);

            })
    }


    const favOperation = (item: any) => {
        var product = item.row

        var favControl = favorites.find(q => q.id == product.id)

        if (!favControl) {
            setfavorites([...favorites, product])
        }
        else {
            var filteredFavorites = favorites.filter(q => q.id != product.id)
            setfavorites(filteredFavorites)
        }

    }


    const favButtonText = (id: any) => {

        var favControl = favorites.find(q => q.id == id);

        if (!favControl)
            return "Add To Fav"
        else
            return "Remove To Fav"

    }

    const addToCart = (item: any) => {

        var product = item as Product;

        //eğer sepette ürün yoksa

        var cartControl = cart.find(q => q.id == product.id)

        if(!cartControl){
            var newCartItem : CartItem = {
                id: product.id!,
                name: product.name!,
                quantity:1,
                price: product.unitPrice!
            }

            setcart([...cart, newCartItem])
        }
        else{
            cartControl.quantity = cartControl.quantity + 1;
            setcart([...cart])
        }

    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: "ID",
            width: 200
        },
        {
            field: 'name',
            headerName: "Name",
            width: 200
        },
        {
            field: 'unitPrice',
            headerName: "Price",
            width: 200,
            renderCell: (item: any) => <>{(item.row.unitPrice).toFixed(2)}</>
        },
        {
            field: 'taxPrice',
            headerName: "TAX",
            width: 200,
            renderCell: (item: any) => <span>{(Number(item.row.unitPrice) * 1.2).toFixed(2)}</span>
        },
        {
            field: 'unitsInStock',
            headerName: "Stock",
            width: 200
        },
        {
            field: 'quantityPerUnit',
            headerName: "Quantity Per Unit",
            width: 200
        },
        {
            field: "Delete",
            headerName: "Delete",
            width: 200,
            renderCell: (item) => <Button onClick={() => deleteProduct(item.id.toString())} variant='contained' color='error'>DELETE</Button>
        },
        {
            field: "Fav",
            headerName: "Favorites",
            width: 200,
            renderCell: (item) => {
                return <Button
                    variant='contained'
                    color='success'
                    onClick={() => favOperation(item)}>{favButtonText(item.row.id)}</Button>
            }
        },
        {
            field: "Cart",
            headerName: "Cart",
            width: 200,
            renderCell: (item) => {
                return <Button
                    variant='contained'
                    color='info'
                    onClick={() => addToCart(item.row)}>Add To Cart</Button>
            }
        }
    ]


    return (<>
        <div style={{ width: '100%', height: 400 }}>

            <DataGrid
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 25, page: 0 },
                    },
                }}
                rows={products}
                columns={columns}
                localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
                loading={loading}
            />
        </div>
    </>)
}

export default DataGridProducts



interface Product{
    id?:number
    name?:string
    unitPrice?:number
    unitsInStock?: number
    quantityPerUnit?:string
}