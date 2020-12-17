import React from 'react'

const Product = ({url, price, name}) => {

    return (
                <div className="product">
                    <div className="product--image">
                        <img src={url} alt={name}/>
                    </div>
                    <div className="product--details">
                        <p>{name}</p>
                        <div className="product--icon">
                            <button className="product--cartBtn">ADD TO CART</button>
                            <h3>
                            ${price}</h3>
                        </div>
                    </div>
                </div>      
                 
    )
}

export default Product
