import React from 'react'
import HeaderLanguage from './HeaderLanguage/HeaderLanguage'
import HeaderLogin from './HeaderLogin/HeaderLogin'
import HeaderSoc from './HeaderSoc/HeaderSoc'

const RowHeader = () => {
    return(
        <div className="wrap-header hide-tablet">
            <div className="container">
                <div className="row-header-first">
                    <HeaderSoc/>
                    <div className="header-right-blok">
                        <HeaderLogin/>
                        <HeaderLanguage/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowHeader