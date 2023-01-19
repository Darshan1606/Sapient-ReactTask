import React from "react";
import image from "../../assets/image-web-3-desktop.jpg";
import img1 from "../../assets/image-retro-pcs.jpg";
import img2 from "../../assets/image-top-laptops.jpg";
import img3 from "../../assets/image-gaming-growth.jpg";

import './main.css'

const Main = () => {
    return (
        <>
            <div className="hero">
                <div className="main">
                    <div className="main-image">
                        <img
                            className="m-img"
                            alt="w-image"
                            src={image} />
                    </div>
                    <div className="main-content">
                        <div className="main-title">
                            The Bright Fututre of Web 3.0?
                        </div>
                        <div className="main-desc">
                            <p>We divide into the next evolution of the web that claims to put
                                the power of the platforms back into the hands of th people.
                                But it is really fulfiling its promise?
                            </p>
                            <a href="#" className="main-button">Read More</a>
                        </div>
                    </div>
                </div>

                <aside className="sidebar">
                    <h2>New</h2>
                    <div className="side-content">
                        <a href="#">Hydrogen VS Electric Cars</a>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        <hr />
                        <a href="#">The Downsides of AI Artistry</a>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                        <hr />
                        <a href="#">Is VC Funding Drying Up?</a>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </aside>
            </div>

            <div className="blog-list">
                <div className="blog-card">
                    <div className="blog-image">
                        <img
                            className="m-img"
                            alt="w-image"
                            src={img1}
                        />
                    </div>
                    <div className="blog-desc">
                        <span>01</span> <br/>
                        <a href="#">Reviving Retro PCs</a>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-image">
                        <img
                            className="m-img"
                            alt="w-image"
                            src={img2}
                        />
                    </div>
                    <div className="blog-desc">
                        <span>02</span> <br/>
                        <a href="#">Top 10 Laptops of 2022</a>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-image">
                        <img
                            className="m-img"
                            alt="w-image"
                            src={img3}
                        />
                    </div>
                    <div className="blog-desc">
                        <span>03</span> <br/>
                        <a href="#">The Growth of Gaming</a>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Main