import React from 'react'
import MenuLaptop from './MenuLaptop/MenuLaptop'
import MobileMenu from './MobileMenu/MobileMenu'
import OpenMobileMenu from './OpenMobileMenu/OpenMobileMenu'

const Menu = () => {
    return(
        <>
            <OpenMobileMenu/>
            <MobileMenu/>
            <MenuLaptop/>
        </>
    )
}

export default Menu