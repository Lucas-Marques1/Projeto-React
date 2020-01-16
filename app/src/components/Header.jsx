import React from 'react'
import './Header.css'
import logo from '../logo.png'

export default props => {

    return (
        <header className='container-fluid'>
            <div className="row text-center justify-content-center">
                <div className="col-sm-12 col-md-4 col-lg-6">
                    <div className='logo'>
                        <img src={logo} alt="Logo"/>
                        <div className='text-logo'>tinyone</div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-6 list">
                    <ul>
                        <li>Features</li>
                        <li>Support</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>        
        </header>
    )
}