import React, { useState } from 'react'

function StateStyle() {

    const staticColors = ["blue", "red", "tomato", "yellow", "black", "orange", "gray", "brown", "pink", "purple", "green", "aqua", "aquamarine"]

    const [color, setcolor] = useState<string>('aquamarine')

    const change = () => {

        var randomIndex = Math.floor(Math.random() * staticColors.length)
        setcolor(staticColors[randomIndex])
    }

    return (<>
        <button onClick={change}>Change Color</button>
        <div style={{ width: 500, height: 500, borderStyle: 'solid', backgroundColor:color }}>

        </div>
    </>
    )
}

export default StateStyle