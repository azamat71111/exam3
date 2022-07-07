import React from 'react'
import styles from "./Features.sass";

function Features() {
    return (
        <div>
            <div className="feature">
            <div className="container">
            <h2 className="section-title">Features</h2>
            <ul className="feature-list">
                <li className="feature-item">
                <img src="images/card-img1.png" alt="" className="feature-image" />
                <div className="feature-info">
                    <h3 className="feature-title">
                    Supports All Currencies and Cards
                    </h3>
                    <p className="feature-text">
                    We support all popular currencies and is fully customizable to add
                    </p>
                    <a href="#" className="feature-link">
                    Read More
                    </a>
                </div>
                </li>
                <li className="feature-item">
                    <img src="images/card-img2.png" alt="" className="feature-image" />
                    <div className="feature-info">
                        <h3 className="feature-title">
                        Supports All Currencies and Cards
                        </h3>
                        <p className="feature-text">
                        We support all popular currencies and is fully customizable to add
                        </p>
                        <a href="#" className="feature-link">
                        Read More
                        </a>
                    </div>
                </li>
                <li className="feature-item">
                <img src="images/card-img3.png" alt="" className="feature-image" />
                <div className="feature-info">
                    <h3 className="feature-title">
                    Supports All Currencies and Cards
                    </h3>
                    <p className="feature-text">
                    We support all popular currencies and is fully customizable to add
                    </p>
                    <a href="#" className="feature-link">
                    Read More
                    </a>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Features