import React from 'react'
import "./headerLanguage.css"

const HeaderLanguage = () => {
    return(
        <div className="header-language-box hide-tablet">
            <div className="header-language-menu activ-language">UA</div>
            <div className="header-language-menu">RU</div>
            <span></span>
        </div>
    )
}

export default HeaderLanguage