import React from 'react'
import { useProductsContext } from "./products_context"
import Product from './Products'

const WholeNews = () => {
    const{
        news_loading,
        news_error,
        news
    } = useProductsContext()
    return(
        <div>
            <div className='section-center featured'>
                {news.map((product) => {
                return <Product key = {product.id}{...product} />
                })}
            </div>
        </div>
    )
}

export default WholeNews;