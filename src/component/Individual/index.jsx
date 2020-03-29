
import React from "react"
import "./individual.scss"
import Button  from "../Button"


const Individual = () => {
    return (
        <div className="individual">
            
            <div className="individual-div">
            <img className="individual-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1573721067/woh12ts1uqmugkyw8tjc.png" width="200" height="350" alt="" />
               <div className="individual-sub-div">
                    <h1 className="individual-header">“Dae Alright” food for all individuals</h1>
                    <p className="individual-paragraph">Order lunch, fuel for meetings or late-night deliveries to the office, at home or anywhere. Your favorite restaurants coming to your door step.</p>
                    <Button name="Get Started" />
               </div>
                
            </div>
        </div>
    )
}

export default Individual