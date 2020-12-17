import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import "../styles/LazyLoad.css"
const LazyLoad = () => {
    
    return (
        <div className="lazyload">
        <ShoppingCartOutlined  fontSize="large" className="lazyload--icon"/>
            <h2 className="nav-logo">GoodyBags</h2>
            
        </div>
    )
}

export default LazyLoad
