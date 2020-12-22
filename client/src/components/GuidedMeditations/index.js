import React from "react";
import Relax from "./Relax.png";
import Positive from "./Positive.png";
import Focus from "./Focus.png";
import Anxiety from "./Anxiety.png";
import Sleep from "./Sleep.png";
import lettingGo from "./lettinggo.png";
import { Link } from "react-router-dom";
import "./index.css";

function GuidedMeditations() {
    return (
        <div className='container' style={{ minHeight: "75vh", marginTop: "5%" }}>
            <div className='row'>
                <div className='col'>
                    <div className='card-calm'>
                        <h4>Calm</h4>
                        <Link to='/guidedmeditation/calm'>
                            <img
                                src={Relax}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{ borderRadius: "90%" }}
                            />
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='card-morning'>
                        <h4>Good Morning</h4>
                        <Link to='/guidedmeditation/morning'>
                            <img
                                src={Positive}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{ borderRadius: "90%" }}
                            />
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='card-focus'>
                        <h4>Focus</h4>
                        <Link to='/guidedmeditation/focus'>
                            <img
                                src={Focus}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{ borderRadius: "90%" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='card-anxiety'>
                        <h4>Anxiety Relief</h4>
                        <Link to='/guidedmeditation/anxiety'>
                            <img
                                src={Anxiety}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{ borderRadius: "90%" }}
                            />
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='card-sleep'>
                        <h4>Restful Sleep</h4>
                        <Link to='/guidedmeditation/sleep'>
                            <img
                                src={Sleep}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{ borderRadius: "90%" }}
                            />
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='card-letgo'>
                        <h4>Letting Go</h4>
                        <Link to='/guidedmeditation/letgo'>
                            <img
                                src={lettingGo}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{ borderRadius: "90%" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuidedMeditations;
