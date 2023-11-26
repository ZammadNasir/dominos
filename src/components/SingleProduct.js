import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../data/data'
import { UseShoppingCart } from '../contexts/CartContext';


const SingleProduct = () => {
    const { productId } = useParams();
    const { addToCart, message } = UseShoppingCart()
    const product = productsData.filter((item) => item.title == productId)
    return (
        <div>
            {product.map((item) => {
                return (
                    <div>
                        <img src={item.img} width={200} />
                        <p>{item.title}</p>
                        <p>{item.desc}</p>
                        <p>{item.price}</p>
                        <button
                            onClick={() => addToCart(
                                item.id,
                                item.title,
                                item.img,
                                item.price
                            )}
                        >
                            Add To Cart
                        </button>
                    </div>
                )
            })}

            <div
                className="message"
                style={{
                    right: message === "" ? "-238px" : "0px",
                }}
            >
                <p>{message}</p>
            </div>
        </div>
    )
}

export default SingleProduct
