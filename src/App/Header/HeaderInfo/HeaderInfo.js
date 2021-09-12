import React from "react";
import "./headerInfo.css"

const HeaderInfo = () =>{
    return(
        <div className="header-info-box hide-tablet">
            <div className="purchase-history"></div>
            <div className="like-history"><span>4</span></div>
        </div>
    )
}

export default HeaderInfo