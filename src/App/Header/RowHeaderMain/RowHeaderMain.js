import React from 'react'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import Search from './Search/Search'

const RowHeaderMain = () => {
    return (

        <div className="container position-menu">
            <div className="row-header">
                <Logo/>
                <Menu/>
                <Search/>
            </div>
        </div>

    )
}

export default RowHeaderMain