import React from 'react';
import reactDom from 'react-dom';



const App = () => {
  return (
    <>
        <header className="header">
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
            <div className="container position-menu">
                <div className="row-header">
                    <img className="logo" src="images/Logo.png" alt=""/>
                    <div className="open-mobile-menu hide-laptop">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
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
                    <form className="search" action="">
                        <input className="search-input" type="text" placeholder="Your question"/>
                        <button className="btn-search"></button>
                    </form>
                </div>
            </div>
            <div className="slider-box hide-mobile">
                <div className="slider">
                    <div className="item">
                        <img src="images/header-fon.jpg" alt="Первый слайд"/>
                        <div className="slideText">Заголовок слайда 1</div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

reactDom.render(<App/>,document.getElementById('root'))