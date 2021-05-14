import {createContext} from 'react'

export const ShopContext = createContext();

const value = {
    
}

export const ContextProvider = ({children}) =>{
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}