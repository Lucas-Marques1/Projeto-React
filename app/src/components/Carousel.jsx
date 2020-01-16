import React from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import apple from '../apple.png'
import android from '../android.png'
import windows from '../windows.png'
import cel from '../cel.png'

export default props => {
    return (
        
        <Carousel>
            <Carousel.Item>
                <div className="container-fluid container-carousel">
                    <div className="row text-center justify-content-center">
                        <div className="col-sm-12 col-md-4 col-lg-4 text-left conteudo-carousel">
                            <p className='title-carousel'>Inspire your inspiration</p>
                            <p className='sub-title-carousel'>Simple to use for your app, products showcase and your inspiration</p>
                            <p className='text-carousel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>
                            <div className="row itens">
                                <div className="item1">
                                    <img src={apple} alt="Apple"/>
                                </div>
                                <div className="item">
                                    <img src={android} alt="Android"/>
                                </div>
                                <div className="item">
                                    <img src={windows} alt="Windows"/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 justify-content-center">
                            <img src={cel} className='img-fluid' alt="Cel"/>
                        </div>
                        
                    </div>
                </div>
                
            </Carousel.Item>
            <Carousel.Item>
                    <div className="container-fluid container-carousel">
                    <div className="row text-center justify-content-center">
                        <div className="col-sm-12 col-md-4 col-lg-4 text-left conteudo-carousel">
                            <p className='title-carousel'>Inspire your inspiration</p>
                            <p className='sub-title-carousel'>Simple to use for your app, products showcase and your inspiration</p>
                            <p className='text-carousel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>
                            <div className="row itens">
                                <div className="item1">
                                    <img src={apple} alt="Apple"/>
                                </div>
                                <div className="item">
                                    <img src={android} alt="Android"/>
                                </div>
                                <div className="item">
                                    <img src={windows} alt="Windows"/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 justify-content-center">
                            <img src={cel} className='img-fluid' alt="Cel"/>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                    <div className="container-fluid container-carousel">
                    <div className="row text-center justify-content-center">
                        <div className="col-sm-12 col-md-4 col-lg-4 text-left conteudo-carousel">
                            <p className='title-carousel'>Inspire your inspiration</p>
                            <p className='sub-title-carousel'>Simple to use for your app, products showcase and your inspiration</p>
                            <p className='text-carousel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>
                            <div className="row itens">
                                <div className="item1">
                                    <img src={apple} alt="Apple"/>
                                </div>
                                <div className="item">
                                    <img src={android} alt="Android"/>
                                </div>
                                <div className="item">
                                    <img src={windows} alt="Windows"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 justify-content-center">
                            <img src={cel} className='img-fluid' alt="Cel"/>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )

}