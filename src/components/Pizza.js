import React from 'react'
import productsData from '../data/data'
import { Link } from 'react-router-dom'
const Pizza = () => {

    const pizza = productsData.filter((item) => item.category === "pizza")

    return (
        <>
            <section className='pizza'>
                <div className="container">
                    <div className="pizza-inner products-inner">
                        {
                            pizza.map((item, index) => {
                                return (
                                    <Link to={`/singleproduct/${item.title}`}>
                                        <div className="product" key={index} id={item.id}>
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                width={200}
                                                className="product-img" />
                                            <div className="product-details">
                                                <div className="product-title">
                                                    <h3 className="title">{item.title}</h3>
                                                    <img src="../assets/icons/like.png" width={25} />
                                                </div>
                                                <span className="desc">{item.description}</span>
                                                <p className="price">$ {item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pizza
