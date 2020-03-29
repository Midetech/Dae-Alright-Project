import React from 'react'
import './Footer.scss'


function Footer() {
    return (
        <footer className="deyAlrightFooterContainer">
            <div className="logoDiv">
             <img src="https://res.cloudinary.com/dq9utkjw2/image/upload/v1572357304/logo_zrlxud.png" alt="Dae-Alright-logo" className="footerLogo" />
            </div>
            <div className="deyAlrightFooter">
                <div className="deyAlrightFooterRow-1">
                    <div className="cityContainer1">
                        <select name="browsers" size="1" className="cityItem1">
                            <option>Select All Cities</option>
                            <option value="chrome">Google Chrome</option>
                            <option value="safari">Safari</option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                            <option value="explorer">Internet Explorer</option>
                            <option value="firefox">Firefox</option>
                            <option value="opera">Opera</option>
                            <option value="brave">Brave </option>
                        </select>
                        <ul className="cityItem2">
                         <li><a href="footer.js">About Dae alright</a></li>
                         <li><a href="footer.js">Become a delivery partner</a></li>
                         <li><a href="footer.js">Become a business partner</a></li>
                        </ul>
                    </div>
                    <div className="cityContainer2">
                        <select name="browsers" size="1" class="row2item1">
                            <option>Select All resturants</option>
                            <option value="chrome">Google Chrome</option>
                            <option value="safari">Safari</option>
                            <option value="explorer">Internet Explorer</option>
                            <option value="firefox">Firefox</option>
                            <option value="opera">Opera</option>
                            <option value="brave">Brave </option>
                        </select>
                    </div>
                </div>
                <div className="deyAlrightFooterRow-2">
                    <div className="faqAndContactUs">
                        <ul className="faqBlog">
                              <li><a href="footer.js">FAQs</a></li>
                             <li><a href="footer.js">Blog</a></li>
                        </ul>
                        <ul className="contactUs">
                         <li><a href="footer.js">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="socialImages">
                        <img className='getApp' src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571821215/my%20project/et9bmbe3mjhylwbfmree.png" alt="downnload app from app store" />
                        <img  className='getApp' src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571821216/my%20project/gix7baujoc1bqeczruru.png" alt="downnload app from google play store" />
                    </div>
                </div>
            </div>
            <div className='terms-and-condition'>
                <p className='c'>Terms and Conditions 
                <span className='period'>&middot;</span>
                <span >Privacy Policy</span>
                </p>
                <p className='c'>&#xa9; Copyright 2018 Dae Alright! is a registered trademark</p>

            </div>
                   
        </footer>
    )
}

export default Footer
