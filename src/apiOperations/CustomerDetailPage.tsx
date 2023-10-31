import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CustomerModel } from '../models/CustomerModel'

function CustomerDetailPage() {

    const { id } = useParams()
    const [detail, setdetail] = useState<CustomerModel>()


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {
                setdetail(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log('Error ', err);
            })

    }, [])


    return (<>
            <h1>Id: {detail?.id}</h1>
            <h1>Company Name: {detail?.companyName}</h1>
            <h1>Contact Name: {detail?.id}</h1>
            <h1>City: {detail?.address?.city}</h1>
            <h1>Street: {detail?.address?.street}</h1>


    </>)
}

export default CustomerDetailPage