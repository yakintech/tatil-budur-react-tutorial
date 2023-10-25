import React, { useState } from 'react'
import { suppliersData } from '../data/suppliers'
import { SupplierModel } from '../models/SupplierModel'

function ObjectArraySample2() {

    const [suppliers, setSuppliers] = useState<SupplierModel[]>(suppliersData)


    const removeSupplier = (id: number = 0) => {

        var filteredSuppliers = suppliers.filter(q => q.id != id)
        setSuppliers(filteredSuppliers)
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>City</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>{item.address?.city}</td>
                            <td><button onClick={() => removeSupplier(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ObjectArraySample2