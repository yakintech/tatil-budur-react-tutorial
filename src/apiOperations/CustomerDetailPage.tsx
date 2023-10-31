import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CustomerDetailPage() {

    const { id } = useParams()


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {

            })

    }, [])


    return (<>

    </>)
}

export default CustomerDetailPage