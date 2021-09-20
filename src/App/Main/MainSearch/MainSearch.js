import React from "react"
import "./mainSearch.css"

const MainSearch = () => {
    return (
        <div className="main-search-box hide-tablet">
            <input type="text" placeholder="Search" className="main-search-input"/>
            <button className="main-search-btn"></button>
        </div>
    )
}

export default MainSearch