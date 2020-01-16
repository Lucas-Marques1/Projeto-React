import React from 'react'
import './Keep.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Facebook from '../facebook.png'
import Twitter from '../twitter.png'
import Google from '../google.png'
import Pinterest from '../pinterest.png'

export default props => {
    return (
        <div className='container-fluid'>    
            <div className="row justify-content-center back-keep">
                <div className="col text-center keep-container">
                    <p className='title-keep'>Keep in touch with us</p>
                    <p className='info-keep'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                    <div>
                        <InputGroup className="mb-3">
                            <FormControl
                                className="input"
                                placeholder="Enter your email to update."
                                aria-label="Enter your email to update."
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button className='my-btn' variant="outline">Submit</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <div className='images-redes'>
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Twitter} alt="Twitter"/>
                        <img src={Google} alt="Google"/>
                        <img src={Pinterest} alt="Pinterest"/>
                        
                    </div>                    
                </div>
            </div>
        </div>
    )
}