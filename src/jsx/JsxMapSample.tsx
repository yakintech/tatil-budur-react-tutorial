import React from 'react'

function JsxMapSample() {

    let cities : String[] = ["İstanbul", "İzmir", "Ankara", "Edirne", "Diyarbakır", "Erzurum"]

    return (<>
        <ul>
            {
                cities.map((item) => <li>{item.toUpperCase()}</li>)
            }
        </ul>
    </>
    )
}

export default JsxMapSample

//for, foreach, map