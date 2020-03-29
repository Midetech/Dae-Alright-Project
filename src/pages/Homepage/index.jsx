import React from "react"
import "./homepage.scss"
import HeaderWraper from '../../component/HeaderWrapper';
import Navigation from "../../component/Navigation";
import SearchInput from "../../component/Search-input";
import Procedure from "../../component/how-it-work"
import FoodList from "../../component/food-list";
import Individual from "../../component/Individual";
import Subscription from "../../component/subscription"
import GetMobile from "../../component/get-mobile"
import Footer from "../../component/Footer"

const Homepage = () => {
    
    return (
        <div>
             <HeaderWraper renderProp={() => (
                        <div className="header">
                            <Navigation/>
                            <h2 className="header-text"><b>Fresh, Delicious</b> meals to reach your optimum <b>health & fitness</b></h2>
                            <p className="header-sub-text">we can deliver even the most unusual ideas!</p>
                            <h2 className="header-paragraph">Discover local restaurants that delivers to your doorstep!</h2>
                            <SearchInput />
                        
                        </div>
                )}/>
                <Procedure />
                <div>
                    <FoodList />
                    <Individual />
                    <Subscription />
                     <GetMobile  />
                     <Footer /> 
                </div>
                
        </div>
    )
}

export default Homepage