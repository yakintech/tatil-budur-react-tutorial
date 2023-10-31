import React, { useContext, useState } from 'react'
import { CartContext, CartContextType } from '../context/CartContext';
import { Button } from '@mui/material';

function MemoChild() {
    
    const { cart, setcart } = useContext(CartContext) as CartContextType


    console.log('Memo Child Comp Rendered!');

    var random = Math.random()


    return (<>
        <h2>{cart.length}</h2>
        <h3>{random}</h3>
        <div>MemoChild</div>
        <Button onClick={() => setcart([])} variant='outlined' color='error' >Empty</Button>


    </>

    )
}

export default React.memo(MemoChild)