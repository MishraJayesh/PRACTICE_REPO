import React from 'react';
import S1 from '../../Cards/Images/S1.jpg';
import S2 from '../../Cards/Images/S2.jpg';
import S3 from '../../Cards/Images/S3.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={S1} className="d-block w-100" alt="Slide-1" />
                    </div>
                    <div className="carousel-item">
                        <img src={S2} className="d-block w-100" alt="Slide-2" />
                    </div>
                    <div className="carousel-item">
                        <img src={S3} className="d-block w-100" alt="Slide-3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card border-success mb-3" style={{ "max-width": "18rem" }}>
                            <div className="card-header bg-transparent border-success">Header</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dicta accusamus sunt sit incidunt, ratione quaerat modi voluptatibus ducimus! Praesentium aliquam quas aut minus voluptate, adipisci ea animi iure nesciunt ullam vel recusandae sapiente.</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">Footer</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card border-success mb-3" style={{ "max-width": "18rem" }}>
                            <div className="card-header bg-transparent border-success">Header</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis vero est autem voluptatum dolorum quam, natus repellendus, hic sequi a, ipsa provident consectetur fuga? Porro praesentium est cum veniam accusamus culpa, quas dignissimos?</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">Footer</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card border-success mb-3" style={{ "max-width": "18rem" }}>
                            <div className="card-header bg-transparent border-success">Header</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laboriosam libero non odio maiores assumenda eius mollitia possimus voluptatum molestias ducimus maxime optio tempora laborum eum quasi ut sunt, dolore a vitae voluptates error.</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">Footer</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card border-success mb-3" style={{ "max-width": "18rem" }}>
                            <div className="card-header bg-transparent border-success">Header</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laboriosam libero non odio maiores assumenda eius mollitia possimus voluptatum molestias ducimus maxime optio tempora laborum eum quasi ut sunt, dolore a vitae voluptates error.</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">Footer</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
