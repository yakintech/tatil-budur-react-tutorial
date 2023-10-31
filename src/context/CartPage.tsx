import React, { useContext } from 'react'
import { CartContext, CartContextType, CartItem } from './CartContext'
import { Button } from '@mui/material'

function CartPage() {

  const { cart, setcart } = useContext(CartContext) as CartContextType

  var totalPrice = 0


  cart.forEach(item => {
    totalPrice = totalPrice + (item.price * item.quantity)
  })


  const removeCart = (id: number) =>{

    var filteredCart = cart.filter(q => q.id != id);

    setcart(filteredCart)

  } 

  return (<>
    <h1>Cart Page</h1>
    <hr />
    <h3>Total Price:{totalPrice.toFixed(2)}</h3>
    <hr />
    <ul>
      {
        cart && cart.map((item: CartItem, key: any) => {
          return <>
            <li style={{ display: 'flex', margin: 20 }}>
              <h4>{item.name} - {item.price.toFixed(2)} * {item.quantity} = {(item.price * item.quantity).toFixed(2)}</h4>
              <Button onClick={() => removeCart(item.id)} variant='outlined' color='error' >Remove Cart</Button>

            </li>
          </>
        })
      }
    </ul>
    <hr />
    <Button onClick={() => setcart([])} variant='outlined' color='error' >Empty</Button>
    <hr />
  </>
  )
}

export default CartPage