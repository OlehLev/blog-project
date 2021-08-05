import React from 'react'

const RowHeaderMain = () => {
    return (
        <div className="container position-menu">
        <div className="row-header">
            <img className="logo" src="images/Logo.png" alt="logo"/>
            <div className="open-mobile-menu hide-laptop">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="mobile-menu hide-laptop">
                <li className="mobile-menu-items"><a href="" className="mobile-menu-item">HOME</a></li>
                <li className="mobile-menu-items"><span href="" className="mobile-menu-item">CATEGORY</span>
                    <ul className="mobile-submenu">
                        <li className="mobile-submenu-items"><a href="" className="mobile-submenu-item">Inovation</a></li>
                        <li className="mobile-submenu-items"><a href="" className="mobile-submenu-item">Sport</a></li>
                        <li className="mobile-submenu-items"><a href="" className="mobile-submenu-item">Lifehike</a></li>
                        <li className="mobile-submenu-items"><a href="" className="mobile-submenu-item">Test-drive</a></li>
                    </ul>
                </li>
                <li className="mobile-menu-items"><a href="" className="mobile-menu-item">ABUT AS</a></li>
                <li className="mobile-menu-items"><a href="" className="mobile-menu-item">SHOP</a></li>
            </ul>
            <ul className="menu">
                <li className="menu-items"><a href="" className="menu-item active-header">HOME</a></li>
                <li className="menu-items"><a href="file:///D:/FrontEnd/My-project/Blog/Category/index.html" className="menu-item">CATEGORY</a>
                    <ul className="submenu">
                        <li className="submenu-items"><a href="" className="submenu-item">Inovation</a></li>
                        <li className="submenu-items"><a href="" className="submenu-item">Sport</a></li>
                        <li className="submenu-items"><a href="" className="submenu-item">Lifehike</a></li>
                        <li className="submenu-items"><a href="" className="submenu-item">Test-drive</a></li>
                    </ul>
                </li>
                <li className="menu-items"><a href="" className="menu-item">ABUT AS</a></li>
                <li className="menu-items"><a href="" className="menu-item">SHOP</a></li>
            </ul>
            <form className="search" action="">
                <input className="search-input" type="text" placeholder="Your question"/>
                <button className="btn-search"></button>
            </form>
        </div>
    </div>
    )
}

export default RowHeaderMain