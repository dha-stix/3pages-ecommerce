import { PinDropOutlined, MailOutline, Twitter, Facebook, Instagram, Pinterest} from '@material-ui/icons'
import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer--top">
                <div className="footer--top--first">
                    <h3>(+234) 810 9393 720</h3>
                   <div className="footer--location"><PinDropOutlined  fontSize="medium" className="footer--icon"/> 
                   <p>736 Oakland Avenue, Off Billand Paints, Lagos</p></div> 
                   <div className="footer--location"><MailOutline  fontSize="medium" className="footer--icon"/> 
                   <p>contactus@goodybag.com</p></div>

                   <div className="footer--location">
                   <Twitter fontSize="medium" className="footer--icon"/> 
                    <Facebook fontSize="medium" className="footer--icon"/> 
                    <Instagram fontSize="medium" className="footer--icon"/>
                    <Pinterest fontSize="medium" className="footer--icon"/>
                    </div>
                </div>

                <div className="footer--top--center">
                    <h3>Terms of Use</h3>
                    <p>Privacy & Policy</p>
                    <p>Return Policy</p>
                    <p>Shipping</p>
                </div>

                <div className="footer--top--last">
                    <h3> Subscribe Newsletter</h3>
                    <p>Stay updated on the latest goods and offers</p>
                    <form className="subscribe">
                        <input type="email" placeholder="Enter your email"/>
                        <button>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <div className="footer--bottom">
                <p className="footer--copyright">Copyright 2020 GoodyBag. All Rights Reserved</p>
                <p>Powered by <strong>David Asaolu</strong></p>
            </div>
        </footer>
    )
}

export default Footer
