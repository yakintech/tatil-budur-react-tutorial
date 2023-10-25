import React, { useState } from 'react'
import { categoriesData } from '../data/categories'

function ObjectArraySample() {

  const [categories, setcategories] = useState<any[]>(categoriesData)


  const removeProduct = (id : number) => {

    var confirm = window.confirm("Are you sure?")

    if(confirm){

      var filteredCategories = categories.filter(x => x.id != id);
      setcategories(filteredCategories)

    }

  }

  return (<>
  <button onClick={() => setcategories([])}>Empty</button>
    <h1>Length: {categories.length}</h1>
    <table className='w3-table'>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Description</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {
          categories && categories.map(item => {
            return <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td><button onClick={() => removeProduct(item.id)}>Delete</button></td>
            </tr>
          })
        }
      </tbody>
    </table>
  </>)
}

export default ObjectArraySample