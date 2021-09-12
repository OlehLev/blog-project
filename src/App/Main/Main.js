import React from 'react'
import PostList from './Posts/PostList'


const Main = () => {
    return(
        <main className="main">

            <section className="main-sort">
                <div className="container">
                    <div className="row-main-sort">
                        <ul className="filter-box hide-mobile">
                            <li className="sort-name">Categories:</li>
                            <li className="sort-items"><button className="sort-item active">All</button></li>
                            <li className="sort-items"><button className="sort-item">Sport</button></li>
                            <li className="sort-items"><button className="sort-item">Workout</button></li>
                            <li className="sort-items"><button className="sort-item">Yoga</button></li>
                            <li className="sort-items"><button className="sort-item">Nutrition</button></li>
                            <li className="sort-items"><button className="sort-item">Life-hike</button></li>
                            
                        </ul>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row-mein">
                    <PostList/>
                    <div className="main-right">
                        <div className="main-search-box hide-tablet">
                            <input type="text" placeholder="Search" className="main-search-input"/>
                            <button className="main-search-btn"></button>
                        </div>
                        {/* <div className="main-categories-box">
                            <div className="close-category hide-laptop">
                                <span></span>
                                <span></span>
                            </div>
                            <p className="main-right-box-name">CATEGORIES</p>
                            <div className="main-category-items">
                                <a href="" className="main-category-item">
                                    <p>Inovation</p>
                                    <span>5</span>
                                </a>
                                <a href="" className="main-category-item">
                                    <p>Sport</p>
                                    <span>7</span>
                                </a>
                                <a href="" className="main-category-item">
                                    <p>Lifehike</p>
                                    <span>11</span>
                                </a>
                                <a href="" className="main-category-item">
                                    <p>Test-drive</p>
                                    <span>15</span>
                                </a>
                            </div>
                        </div> */}

                        <div className="main-subscribe-box">
                            <p className="main-right-box-name">SUBSCRIBE</p>
                            <p className="main-subscribe-input-name">Name</p>
                            <input type="text" placeholder="Your name" className="main-subscribe-input"/>
                            <p className="main-subscribe-input-name">Email</p>
                            <input type="email" placeholder="Your email" className="main-subscribe-input"/>
                            <button className="main-subscribe-btn">SUBSCRIBE</button>
                            <p className="main-subscribe-or">or</p>
                            <div className="soc">
                                <span href="" className="soc-items"><div className="soc-youtube"></div><span className="soc-youtube-hover"></span></span>
                                <span href=""className="soc-items"><div className="soc-fb"></div><span className="soc-fb-hover"></span></span>
                                <span href=""className="soc-items"><div className="soc-instagram"></div><span className="soc-instagram-hover"></span></span>
                                <span href=""className="soc-items"><div className="soc-telegram"></div><span className="soc-telegram-hover"></span></span>
                            </div>
                        </div>

                        <div className="main-tabpost-box hide-tablet">
                            <h2 className="main-right-box-name">TAB POST</h2>
                            <div className="main-tabpost-tab-box">
                                <div className="main-tabpost-tab-first">RECOMMEND</div>
                                <div className="main-tabpost-tab-second active">POPULAR</div>
                            </div>
                            <div className="main-tabpost-item-first">
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/tokio.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <p className="publication-author-main-right-date"> April 28.2021</p>
                                                <div className="publication-comment">67<span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/tokio.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <h4 className="publication-author-main-right-date"> April 28.2021</h4>
                                                <div className="publication-comment">22 <span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/tokio.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <p className="publication-author-main-right-date"> April 28.2021</p>
                                                <div className="publication-comment">9 <span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/tokio.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <p className="publication-author-main-right-date"> April 28.2021</p>
                                                <div className="publication-comment">8 <span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-tabpost-item-second active-tab">
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/SF-top.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <p className="publication-author-main-right-date"> April 28.2021</p>
                                                <div className="publication-comment">77<span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/SF-top.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <p className="publication-author-main-right-date"> April 28.2021</p>
                                                <div className="publication-comment">17 <span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/SF-top.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <p className="publication-author-main-right-date"> April 28.2021</p>
                                                <div className="publication-comment">5 <span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="publication-box-row publication-main-right">
                                    <div className="publication-images-box">
                                        <img src="images/SF-top.jpg" alt="" className="publication-images"/>
                                    </div>
                                    <div className="publication-info-box">
                                        <div className="publication-description-main-right-box">
                                            <div className="publication-main-right-author-info">
                                                <p className="publication-author-main-right-date"> April 28.2021</p>
                                                <div className="publication-comment">3 <span className="publication-comment-image"></span></div>
                                            </div>
                                            <p className="publication-main-right-name">Name publicatio Name publicatio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <div className="insta-slider-box">
                    <img src="images/gonkong_kitaj.jpg" alt=""/>
                    <img src="images/gonkong_kitaj.jpg" alt=""/>
                    <img src="images/gonkong_kitaj.jpg" alt=""/>
                    <img src="images/gonkong_kitaj.jpg" alt=""/>
                    <img src="images/gonkong_kitaj.jpg" alt=""/>
                    <img src="images/gonkong_kitaj.jpg" alt=""/>
                    <img src="images/gonkong_kitaj.jpg" alt=""/>
                </div>
                <section className="hide-mobile subscribe-section">
                    <div className="container">
                        <form className="subscribe-box">
                            <h3 className="subscribe-text">Subscribe to our newsletter</h3>
                            <input type="email" className="subscribe-input" placeholder="Email Adress"/>
                            <button className="subscribe-btn">subscribe</button>
                        </form>
                    </div>
                </section>
            </article>
            <div className="open-category hide-tablet hide-laptop">CT</div>
            <div className="up-page  hide-tablet hide-laptop" >UP</div>
        </main>
    )
}

export default Main