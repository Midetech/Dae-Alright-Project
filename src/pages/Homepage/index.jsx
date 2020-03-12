import React from "react"
import "./homepage.scss"
import HeaderWraper from '../../component/HeaderWrapper';
import Navigation from "../../component/Navigation";
import SearchInput from "../../component/Search-input";



const Homepage = ({currentUser}) => {
    console.log(currentUser)
    return (
        <div>
             <HeaderWraper renderProp={() => (
                <div className="container-fluid header">
                <div className="row">
                    <div className="col-12 header">
                        <Navigation currentUser={currentUser}/>
                        <h2 className="header-text"><b>Fresh, Delicious</b> meals to reach your optimum <b>health & fitness</b></h2>
                        <p className="header-sub-text">we can deliver even the most unusual ideas!</p>
                        <h2 className="header-paragraph">Discover local restaurants that delivers to your doorstep!</h2>
                        <div className="search">
                        </div>
                        <SearchInput />
                       
                    </div>
                </div>  
                </div>
            )}/>
        </div>
    )
}

export default Homepage