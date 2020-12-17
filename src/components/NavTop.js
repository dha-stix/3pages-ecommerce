import React from 'react'
import "../styles/HomePage.css"
import { IconButton } from '@material-ui/core'
import { SearchRounded, ShoppingCartRounded } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
const NavTop = () => {
    const [item, setItem] = React.useState("")
    const [menu, showMenu] = React.useState(false)
    const handleClick = () => {
        showMenu(!menu)
    }
    return (
        <>
        <nav>

        <div className="nav-brand">
        <h2 className="nav-logo">GoodyBags</h2>
        </div>
    
        <div className="nav-search">
            <input type="text" placeholder="Search" value={item} onChange={(e)=> setItem(e.target.value)} className= "nav-input"/>
            <IconButton className="search-icon">
                <SearchRounded />
            </IconButton>
        </div>
        
        <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/search" className="nav-item">Categories</Link>
            <Link to="/login" className="nav-item">Log in</Link>
        </div>
        
        <div className="hamburger">
        <IconButton onClick={handleClick}>
          {menu ? <MenuOpenIcon/> :  <MenuIcon/> }  
        </IconButton>
        </div>        
    </nav>
    {menu && (
        <div className="hamburger--options">
            <p><SearchRounded /> Search Products</p>
            <p><ShoppingCartRounded/> Buy Now</p>
            <p>Search</p>
        </div>
    )}
    </>
    )
}

export default NavTop
