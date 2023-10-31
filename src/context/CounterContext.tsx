import { createContext, useState } from "react"


export const CounterContext = createContext<CounterContextType | null>(null)

export const CounterProvider = ({children}: any) => {

    //counter isimli değişkenim benim global state imdir!
    const [counter, setcounter] = useState(0)

 
    

    return <CounterContext.Provider value={{counter, setcounter}}>{children}</CounterContext.Provider>
}


export type CounterContextType = {
    counter: number
    setcounter: (value: number) => void
}