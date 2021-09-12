import React from 'react'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import OpenScrollMenu from './OpenScrollMenu/OpenScrollMenu'
import HeaderLogin from './HeaderLogin/HeaderLogin'
import HeaderLanguage from './HeaderLanguage/HeaderLanguage'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import HeaderBasket from './HeaderBasket/HeaderBasket'

import './header.css'

const Header = () => {
    
        const state ={
            login:true
        }
    return (
        <div className="header">
            <div className="container">
                <div className="row-header">
                    <OpenScrollMenu/>
                    <Logo/>
                    <Menu/>
                    <HeaderLanguage/>
                    {state.login ? <HeaderInfo/> : <HeaderLogin/>}
                    <HeaderBasket/>
                    
                </div>
            </div>
        </div>
    )
}

export default Header