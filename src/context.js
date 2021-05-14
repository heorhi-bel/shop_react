import {createContext, useReducer} from 'react'
import {reducer} from './reducer'

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow:false,
    alertName: ""
}

export const ContextProvider = ({children}) =>{
    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () =>{
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itemId) =>{
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    value.addProduct = (item) =>{
        dispatch({ type: "ADD_PRODUCT", payload: {item}})
    }

    value.plusProduct = (id) =>{
        dispatch({ type: "PLUS_PRODUCT", payload: id})
    }
    value.minusProduct = (id) =>{
        dispatch({ type: "MINUS_PRODUCT", payload: id})
    }

    value.handleBasketshow = () => {
        dispatch({ type: 'TOGGLE_BASKET'})
    }

    value.setGoods = (data) =>{
        dispatch({ type: 'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}