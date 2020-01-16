import React from 'react'
import './Card.css'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Responsive from '../responsive.png'
import Layered from '../layered.png'
import Awesome from '../awesome.png'
import Html from '../html.png'
import Email from '../email.png'
import Download from '../download.png'

export default props => {
    return (
        <div className="row container-fluid justify-content-center container-card">
            <div className="col-lg-12 text-center">
                <CardGroup className='break-card'>
                <Card>
                    <div className='card-item'>
                    <img className='img1' src={Responsive} alt="Responsive"/>
                    <Card.Body>
                    <Card.Title>Fully Responsive</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                    </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
                <Card>
                    <div className='card-item'>
                    <img className='img2'  src={Layered} alt="Layered"/>
                    <Card.Body>
                    <Card.Title>Fully Layered PSD</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                    </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
                <Card>
                    <div className='card-item'>
                    <img className='img3' src={Awesome} alt="Awesome"/>
                    <Card.Body>
                    <Card.Title>Font Awesome Icons</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                    </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
                </CardGroup>
                <CardGroup>
                     
                <Card>
                    <div className='card-item'>
                    <img className='img4' src={Html} alt="Html"/>
                    <Card.Body>
                    <Card.Title>HTML3 & CSS3 </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                    </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
                <Card>
                    <div className='card-item'>
                    <img className='img5' src={Email} alt="Email"/>
                    <Card.Body>
                    <Card.Title>Email Template</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                    </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
                <Card>
                    <div className='card-item'>
                    <img className='img6' src={Download} alt="Download"/>
                    <Card.Body>
                    <Card.Title>Free to download</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
                    </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
                </CardGroup>
            </div>
        </div>
    )

}