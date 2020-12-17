import React from 'react'
import "../styles/HomePage.css"


const Banner = () => {
    return (
        <div className="banner">
                <h1 className="banner-h1"> Shop Like Never Before</h1>
                <p className="banner-p">Shop Always, Sleek Always, Standout Always</p>

                <div className="banner-cta">
                    <button className="cta-shopnow">SHOP NOW</button>
                    <button className="cta-browseshop">BROWSE CATEGORIES</button>
                </div>
          
           
        </div>
    )
}

export default Banner
