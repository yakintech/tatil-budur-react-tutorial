import React, { useContext, useState } from 'react'
import MemoChild from './MemoChild'
import { CartContext, CartContextType } from '../context/CartContext'
import MemoChild2 from './MemoChild2'

function MemoParent() {

    const [counter, setcounter] = useState(0)
    const { cart, setcart } = useContext(CartContext) as CartContextType



    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>

        <hr />
        {/* <MemoChild/> */}
        <hr />
        {/* <MemoChild2/> */}
    </>
    )
}

export default MemoParent