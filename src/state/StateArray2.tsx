import React, { useState } from 'react'

function StateArray2() {

    const [numbers, setnumbers] = useState<number[]>([2, 10, 3])

    const add = () => {
        var randomNumber = Math.floor(Math.random() * 1000);
        numbers.push(randomNumber);

        var newNumbers = numbers
        
        //usestate içerisindeki fonksiyon HER ZAMAN YENİ BİR REFERANS İTER
        setnumbers(newNumbers)
    }
    return (<>

        {/* <button onClick={add}>Add Random Number</button> */}
        <button onClick={() => add()}>Add Random Number</button>

        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default StateArray2