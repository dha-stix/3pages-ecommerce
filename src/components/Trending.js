import React from 'react'
import Product from "./Product"
import "../styles/HomePage.css"


const Trending = () => {
    const items = [
        {
            name: "Perry Ellis Men's Modern Fit Spread Collar Dress Shirt",
            price: 999.99,
            url: "https://m.media-amazon.com/images/I/91GCDxUECiL._AC_UL320_.jpg"
        },
        {
            name: "Calvin Klein Men's Dress Shirt Slim Fit Non-Iron Herringbone",
            price: "4,499.99",
            url: "https://m.media-amazon.com/images/I/719UCSDm-8L._AC_UL320_.jpg"
        },
        {
            name: "Branded Ecstatic Square Table",
            price: "39,999.99",
            url: "http://lane7.s3.amazonaws.com/products/images/6369/Ajike-abuja-lagos-portharcourt-nigeria-lane7.index.jpeg?1543928325"
        },
        {
            name: "Best Rated Ottoman",
            price: "259,999.99",
            url: "http://lane7.s3.amazonaws.com/products/images/6371/Best-Rated-Ottoman-abuja-lagos-portharcourt-nigeria-lane7.index.jpeg?1543930184"
        },
        {
            name: "Fur Seat Bench",
            price: "89,999.99",
            url: "http://lane7.s3.amazonaws.com/products/images/6376/Fur-Sitbench-abuja-lagos-portharcourt-nigeria-lane7.index.jpeg?1543939946"
        },
        {
            name: "Cornel Men Light Brown Slippers",
            price: "1,799.99",
            url: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/860026/1.jpg?0041"
        },
        {
            name: "New Catwalk Sneakers",
            price: "2,399.99",
            url: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/542026/1.jpg?0526"
        },
        {
            name: "Men's Running Outdoor Shoe",
            price: "1,499.99",
            url: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/833576/1.jpg?0856"
        }
        
    ]
    return (
        <div className="trending">
            <h2>Trending Products</h2>
            <div className="products">
               {items.map(item => <Product name={item.name} price={item.price} url={item.url}/>)}
            </div>
            <button className="trending--loadBtn">LOAD MORE</button>
        </div>
    )
}

export default Trending
