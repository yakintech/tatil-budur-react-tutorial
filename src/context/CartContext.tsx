import { createContext, useState } from "react"


export const CartContext = createContext<CartContextType | null>(null)


export const CartProvider = ({ children }: any) =>{

    const [cart, setcart] = useState<CartItem[]>([])

    return <CartContext.Provider value={{cart,setcart}}>{children}</CartContext.Provider>
}


export type CartContextType = {
    cart: CartItem[]
    setcart: (value: CartItem[]) => void
}


export interface CartItem {
    id: number,
    name: string,
    quantity: number,
    price: number
}

