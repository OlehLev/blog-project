import React from 'react'

const MenuLaptop = () => {
    return(
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
    )
}

export default MenuLaptop