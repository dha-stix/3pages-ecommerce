import React, {useState} from 'react'
import "../styles/SearchPage.css"
import NavTop from "./NavTop"

const SearchPage = () => {
    const [item, setItem] = useState("")
    return (
        <>
        <NavTop/>
        <div className="search">

            <h2>Search Products</h2>

            <div className="search--input">
                <input type="text" placeholder="Search" value={item} onChange={(e)=> setItem(e.target.value)} className= "search--input--text"/>
                <button className="search--inputBtn">SEARCH</button>
            </div>

            <div className="search--categories">

                <button>ACCESSORIES</button>
                <button>FOOT WEARS</button>
                <button>CLOTHINGS</button>
                <button>CLOTHINGS</button>
            </div>
        </div>
        </>
    )
}

export default SearchPage
