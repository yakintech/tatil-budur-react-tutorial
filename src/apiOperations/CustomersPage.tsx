import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomerModel } from '../models/CustomerModel'
import { useNavigate } from 'react-router-dom'

function CustomersPage() {

    const [customers, setcustomers] = useState<CustomerModel[]>([])


    const navigate = useNavigate();

    useEffect(() => {
        loadCustomers()
    }, [])


    const loadCustomers = () => {
        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data)
            })
            .catch(err => console.log(err)
            )
    }


    const removeCustomer = (id: string) => {

        axios.delete('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {
                loadCustomers()
            })

    }

    const goToDetail = (id: string) => {
        navigate('/customers/' + id)
    }


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map((item, key) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => removeCustomer(item.id!)}>Delete</button></td>
                            <td><button onClick={() => goToDetail(item.id!)}>Detail</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default CustomersPage