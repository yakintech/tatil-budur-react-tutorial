import React from 'react'

function TBButton(props: Props) {
    return (<>
        <button style={{ width: props.size.width, height: props.size.height, color:props.color }}>{props.title}</button>
    </>
    )
}


type Props = {
    color: string,
    size: Size,
    title:string
}

type Size = {
    width: number,
    height: number,
}

export default TBButton


TBButton.defaultProps = {
    size: {
        width: 100,
        height: 50
    },
    color: 'blue'
}