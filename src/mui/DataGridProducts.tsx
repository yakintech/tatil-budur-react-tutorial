import { Button } from '@mui/material'
import { DataGrid, GridColDef, trTR } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataGridProducts() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

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
            width: 200
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