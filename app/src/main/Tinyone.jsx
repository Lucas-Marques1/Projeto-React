import React, { Component } from 'react'
import './Tinyone.css'
import Header from '../components/Header'
import MyCarousel from '../components/Carousel'
import About from '../components/About'
import Card from '../components/Card'
import Keep from '../components/Keep'
import Footer from '../components/Footer'

export default class Tinyone extends Component {

    render(){
        return (
            <div>
                <Header />
                <MyCarousel />
                <About />
                <Card />
                <Keep />
                <Footer />
            </div>
        )   

    }
}