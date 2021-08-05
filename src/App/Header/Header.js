import React from 'react'
import RowHeader from './RowHeader/RowHeader'
import RowHeaderMain from './RowHeaderMain/RowHeaderMain'
import RowHeaderSlider from './RowHeaderSlider/RowHeaderSlider'
const Header = () => {
    return (
        <header className="header">
            <RowHeader/>
            <RowHeaderMain/>
            <RowHeaderSlider/>
        </header>
    )
}

export default Header