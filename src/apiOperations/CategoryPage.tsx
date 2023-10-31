import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CategoryPage() {

    const [categories, setCategories] = useState<CategoryModel[]>([])
    const [loading, setloading] = useState(true)


    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setCategories(res.data)
                setloading(false)
            })
            .catch(err => {
                console.log('Error ', err);
            })

    }, [])


    return (<>
        {
            loading ? <h1>Loading...</h1> : <ul>
                {
                    categories && categories.map((item, key) => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        }

    </>
    )
}

export default CategoryPage



interface CategoryModel{
    id?:number
    name?:string
    description?:string
}