import React from 'react'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import OpenMobileMenu from './Menu/OpenMobileMenu/OpenMobileMenu'
import HeaderLogin from '../RowHeader/HeaderLogin/HeaderLogin'
import HeaderLanguage from '../RowHeader/HeaderLanguage/HeaderLanguage'

const RowHeaderMain = () => {
    return (

        <div className="container">
            <div className="row-header">
                <OpenMobileMenu/>
                <Logo/>
                <Menu/>
                <HeaderLanguage/>
                <HeaderLogin/>
            </div>
        </div>

    )
}

export default RowHeaderMain