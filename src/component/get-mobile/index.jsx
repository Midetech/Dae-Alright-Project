import React from "react"
import "./get-mobile.scss"
import SearchInput from "../Search-input"


function GetMobile() {
    return (
        <div className="container-fluid">
            <div className="row get-mobile">
                <div className="col-lg-4">
                    <img className="get-mobile-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571821148/my%20project/ysmvwjllckih8pamrqrt.png" alt="" />
                   
                </div>
                <div className="col-lg-8">
                    <h1 className="get-mobile-header">Get more benefits</h1>
                    <h1 className="get-mobile-header1">DOWNLOAD THE APP</h1>
                    <p className="get-mobile-paragraph">Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula<br /> odio. Donec pulvinar tellus eget magna.</p>
                    <div className="get-mobile-img">
                        <a href="#"><img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571821215/my%20project/et9bmbe3mjhylwbfmree.png" alt="" /></a>
                        <a href="#"><img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571821216/my%20project/gix7baujoc1bqeczruru.png" alt="" /></a>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="get-mobile-section1">
                                    <h1 className="get-mobile-section-header"><span className="span">01</span><br />Fast Booking</h1>
                                    <p className="get-mobile-section-paragraph">Curabitur in eleifend turpis, id vehicula<br />  odio.Donec pulvinar tellus eget magna,<br />  aliquet ultricies.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="get-mobile-section1">
                                    <h1 className="get-mobile-section-header"><span className="span">02</span><br />Fast Booking</h1>
                                    <p className="get-mobile-section-paragraph">Orci varius natoque penatibus et<br />  magnis dis parturient montes,<br />  nascetur ridiculus mus.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="get-mobile-section-header"><span className="span">03</span><br />Special Offers</h1>
                                <p className="get-mobile-section-paragraph">Curabitur in eleifend turpis, id vehicula<br />  odio.  Donec pulvinar tellus eget magna,<br />  aliquet ultricies.</p>
                   
                            </div>
                        </div>
                    </div>
                    
                </div>
               
            </div>
            <div className="get-mobile-searchbar">
                <h1 className="get-mobile-search-header">Order Now!</h1>
                <div className="get-input">
                    <select className="get-select">
                        <option>Select your city</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Ibadan</option>
                    </select>
                    <select className="get-select">
                        <option>Select your Location</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Ibadan</option>
                    </select>
                    <input className="get-button" type="button" value="Find Food" />
                </div>
            </div>
        </div>
    )
}

export default GetMobile