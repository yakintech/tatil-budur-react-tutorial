import React, { useState } from 'react'

function StateIntro() {

    console.log("State Intro component rendered!");


    //counter değişkenimin adı. setcounter o değişken, değiştirecek ve componenti tekrar render edecek fonksiyon
    const [counter, setcounter] = useState(0)


    const increase = () => {
        setcounter(counter + 1)
        //document.getElementById('title')!.innerText = counter.toString()

    }

    return (<>
        <h1 id='title'>{counter}</h1>
        <button onClick={increase}>Increase</button>
        {/* <button onClick={() => increase()}>Increase</button> */}

    </>)
}

export default StateIntro

