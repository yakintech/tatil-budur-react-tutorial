import React, { useState } from 'react'

function StateArray() {
    
    
    const [countries, setcountries] = useState<string[]>(["Türkiye", "Almanya", "Japonya"])

    return (<>
        <button onClick={() => setcountries([])}>Empty</button>
        <h1>Length: {countries.length}</h1>
        
        <ul>
            {
                countries.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default StateArray