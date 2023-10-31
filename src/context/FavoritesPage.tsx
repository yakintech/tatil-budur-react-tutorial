import React, { useContext } from 'react'
import { FavoritesContextType, favContext } from './FavoritesContext'
import { Button } from '@mui/material'

function FavoritesPage() {

    const { favorites, setfavorites } = useContext(favContext) as FavoritesContextType


    const removeFav = (id: number) => {

        var filteredFavorites = favorites.filter(q => q.id != id)
        setfavorites(filteredFavorites)
    }

    return (<>
        <Button onClick={() => setfavorites([])} variant='contained' color='error'>Empty</Button>
        <ul>
            {
                favorites.map((item: any, key: any) => {
                    return <>
                        <li key={key}>{item.name}   <Button onClick={() => removeFav(item.id)} color='error' variant='outlined'>Remove</Button> </li>
                       
                    </>
                })
            }
        </ul>
    </>
    )
}

export default FavoritesPage