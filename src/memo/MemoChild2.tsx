import React, { useMemo } from 'react'

function MemoChild2() {

    console.log('MemoChild2 com rendered!');
    

    const generateRandomNumber = () => {
        return Math.random();
    }

    const result = useMemo(() => generateRandomNumber(), [])



    return (<>
        <h1>{result}</h1>
    </>
    )
}

export default MemoChild2