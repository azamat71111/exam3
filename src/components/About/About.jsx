import React from 'react'
import styles from "./About.sass";

function About() {
return (
    <div className="block">
        <div className='container'>
            <div className="info">
                <h1 className="title-info">Stay focused on saving money</h1>
                <div className="info-icons">
                    <img src="icons/icon-play-market.svg" alt="" className="icon-info1" />
                    <img src="icons/icon-app-store.svg" alt="" className="icon-info2" />
                    <img src="icons/icon-windows.svg" alt="" className="icon-info3" />
                </div>
                <p className="info-data">It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily spot and cut any unnecessary expenses. Simply join today to get started!</p>
            </div>
            <div className="img">
                <img src="images/img-3.png" alt="" className="img-1" />
            </div>
        </div>
    </div>

)
}

export default About