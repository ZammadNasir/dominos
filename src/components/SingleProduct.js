import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../data/data'


const SingleProduct = () => {
    const { productId } = useParams();
    const product = productsData.filter((item) => item.title == productId)
    return (
        <div>
            {product.map((item) => {
                return (
                    <div>
                        <img src={item.img} width={200} />
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleProduct
