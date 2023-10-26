import React, { useEffect, useState } from 'react'


//bu component açıldığında random bir değeri state ile ekrana yaz
function EffectSample() {

    const [number, setnumber] = useState(0)
    console.log('Hello Effect');
    

    useEffect(() => {
        var randomNumber = Math.random() * 3000
        setnumber(randomNumber)
    }, [])
    

    return (<>
        <h1>{number}</h1>
    </>
    )
}

export default EffectSample