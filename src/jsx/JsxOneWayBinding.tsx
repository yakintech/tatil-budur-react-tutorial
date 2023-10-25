import React from 'react'

function JsxOneWayBinding() {

    let name : string = "Çağatay"
    let age : number = 18
    let onlineStatus : boolean = true

    let user = {
        name : "Müge",
        age : 10,
        country : 'Türkiye'
    }


    return (<>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        {
            onlineStatus ? <h1>User Online </h1> : <h1>User Offline</h1>
        }

        {
            onlineStatus ? <><span>User</span><span>Online</span></> : <><span>User</span><span>Offline</span></>
        }

        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
        <h2>{user.country}</h2>

    </>)
}

export default JsxOneWayBinding