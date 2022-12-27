import React from "react";
import './Cards.css';

const Cards = () => {
    return (
        <>
            <div className="row mx-5">
                <div className="card-group">
                    <div className="card mx-2 my-2">
                        <img
                            src="https://www.plantsguru.com/image/cache/data/Flowering%20Plants/Rose/plantsguru-flowering-plants-rose-red-800x800.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Rose: The Queen Of Love</h5>
                            <a
                                href="https://en.wikipedia.org/wiki/Garden_roses"
                                className="btn btn-primary"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <img
                            src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2013/6/4/0/Original_original-felicia-feaster-felix-crousse-peony.jpg.rend.hgtvcom.616.616.suffix/1452644925087.jpeg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Peony: The Queen Of Beauty</h5>
                            <a
                                href="https://en.wikipedia.org/wiki/Peony"
                                className="btn btn-primary"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                    <div className="card mx-2 my-2">
                        <img
                            src="https://flowermag.com/wp-content/uploads/2017/08/dahlia.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Dahlia: The Queen Of Devotion</h5>
                            <a
                                href="https://en.wikipedia.org/wiki/Dahlia"
                                className="btn btn-primary"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
