import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from './products_context'
import { single_product_url as url } from './constants'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
    const { id } = useParams();
    console.log(id);
    return(
        <div>
            <h1>single product</h1>
        </div>
    )
}

export default SingleProductPage