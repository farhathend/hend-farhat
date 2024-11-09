import React from 'react';

const DarkCarousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>


            </div>

            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="./isdin2.webp" className="d-block w-100" alt="Slide 1" style={{ "height": "680px", "width": "500" }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>ISDIN acnetic care</h5>
                        <p>ISDIN : Innovative Skincare products | SkinElite</p>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="2000">
                    <img src="./isdin3.png" className="d-block w-100" alt="Slide 2" style={{ "height": "680px", "width": "500" }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>ISDIN skincare</h5>
                        <p>The Dreamiest Nighttime Skincare Routine Step by Step</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="./isdin4.jpg" className="d-block w-100" alt="Slide 3" style={{ "height": "680px", "width": "500" }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Isdin sun protector</h5>
                        <p>ISDIN ou pourquoi est-ce beau de dire Ole</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./isdin5.jpg" className="d-block w-100" alt="Slide 4" style={{ "height": "680px", "width": "500" }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>ISDIN</h5>
                        <p>Innovation Skincare products</p>
                    </div>
                </div>
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default DarkCarousel;
