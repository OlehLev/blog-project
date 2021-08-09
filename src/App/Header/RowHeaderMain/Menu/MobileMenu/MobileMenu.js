import React from 'react'

const MobileMenu = () => {
    return(
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
    )
}

export default MobileMenu