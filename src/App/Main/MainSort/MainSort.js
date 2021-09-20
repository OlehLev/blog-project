import React from "react";
import "./mainSort.css"

const MainSort = () => {
    return (
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
    )
}

export default MainSort