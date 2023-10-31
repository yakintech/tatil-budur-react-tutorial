import axios from 'axios'
import React, { useState } from 'react'

function AddCategory() {

    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")



    const add = () => {

        axios.post('https://northwind.vercel.app/api/categories', { name, description })
            .then(res => {
                alert("Success")
            })

    }

    return (<>
        <div>
            <label htmlFor="">Category Name:</label>
            <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description:</label>
            <input type='text' onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>
    </>
    )
}

export default AddCategory