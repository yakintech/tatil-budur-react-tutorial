import React, { useEffect, useState } from 'react'

function EffectDependency() {

    const [counter1, setcounter1] = useState(0);
    const [counter2, setcounter2] = useState(0);
    const [counter3, setcounter3] = useState(0);


    useEffect(() => {
      
        console.log('Hello');
      
    }, [])

    useEffect(() => {
      
        console.log('Hello-2');
      
    }, [counter2, counter3])
    

    return (<>
        <h1>{counter1}</h1>
        <button onClick={() => setcounter1(counter1 + 1)}>Increase-1</button>

        <hr />

        <h1>{counter2}</h1>
        <button onClick={() => setcounter2(counter2 + 1)}>Increase-1</button>

    </>
    )
}

export default EffectDependency