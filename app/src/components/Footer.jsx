import React from 'react'
import './Footer.css'

export default props => {
    return (
         <footer className='container-fluid'>
            <div className="row justify-content-center footer">
                <div className="col item-footer text-center">
                    <div>HALOVIETNAM LTD</div>
                    <div>66, Dang Van ngu, Dong Da Hanoi, Vietnam</div>
                    <div>contact@halovietnam.com</div>
                    <div>+844 35149182</div>
                </div>
                <div className="col item-footer text-center">
                    <div>Examples</div>
                    <div>Shop</div>
                    <div>License</div>
                </div>
                <div className="col item-footer text-center">
                    <div>Contact</div>
                    <div>About</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                </div>
                <div className="col item-footer text-center">
                    <div>Download</div>
                    <div>Support</div>
                    <div>Documents</div>
                </div>
                <div className="col item-footer text-center">
                    <div>Media</div>
                    <div>Blog</div>
                    <div>Forums</div>
                </div>
                
            </div>
        </footer>

    )

}