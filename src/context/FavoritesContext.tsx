import { createContext, useState } from "react"


export const favContext = createContext<FavoritesContextType | null>(null)



export const FavoritesProvider = ({ children }: any) => {

    const [favorites, setfavorites] = useState<any[]>([])

    return <favContext.Provider value={{ favorites, setfavorites }}>{children}</favContext.Provider>

}


export type FavoritesContextType = {
    favorites: any[]
    setfavorites: (value: any[]) => void
}

