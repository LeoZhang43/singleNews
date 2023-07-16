import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './products_reducer'
import { newsURL as url } from './constants'

const initialState = {
    news_loading: false,
    news_error: false,
    news: []
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const fetchProducts = async(url) => {
        dispatch({ type: 'GET_PRODUCTS_BEGIN' })
        try{
          const response = await axios.get(url)
          console.log(response);
          const products = response.data.articles
          dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: products })
        }catch(error){
          dispatch({ type: 'GET_PRODUCTS_ERROR' })
        }
    }
    useEffect(() => {
        fetchProducts(url)
    }, [])
    return (
        <ProductsContext.Provider value={{
          ...state,
        }}>
          {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}