import React, { useState } from 'react'

function StateArray2() {

    const [numbers, setnumbers] = useState<number[]>([2, 10, 3])

    const add = () => {
        var randomNumber = Math.floor(Math.random() * 1000);

        //Eğer bu number dizide varsa EKLEME
        if (!numbers.includes(randomNumber)) {
            //usestate içerisindeki fonksiyon HER ZAMAN YENİ BİR REFERANS İSTER
            setnumbers([...numbers, randomNumber])
        }


    }
    return (<>
        <h1>Length: {numbers.length}</h1>
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