import React from 'react'

const RowHeader = () => {
    return(
        <div className="wrap-header hide-tablet">
                <div className="container">
                    <div className="row-header-first">
                        <ul className="header-soc">
                            <li><a href="" className="header-soc-youtube header-soc-item"></a></li>
                            <li><a href="" className="header-soc-fb header-soc-item"></a></li>
                            <li><a href="" className="header-soc-instagram header-soc-item"></a></li>
                            <li><a href="" className="header-soc-telegram header-soc-item"></a></li>
                        </ul>
                        <div className="header-right-blok">
                            <div className="login"><span className="ikon-login"></span> log-in</div>
                            <div className="header-language-box">
                                <div className="header-language"></div>
                                <div className="header-language-menu">ENG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default RowHeader