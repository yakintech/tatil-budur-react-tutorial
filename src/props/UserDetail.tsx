import React from 'react'

//prop olarak number, string, boolean, array, object ve FUNCTION gönderebiliriz!

function UserDetail(props: any) {
  return (<>
    <h1>{props.name}</h1>
    <h1>{props.surname}</h1>
    <h1>{props.age}</h1>
    <ul>
      {
        props.points.map((item : number) => <li>{item}</li>)
      }
    </ul>

  </>)
}

export default UserDetail



