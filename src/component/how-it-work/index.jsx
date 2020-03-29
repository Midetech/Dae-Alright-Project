import React from "react"
import "./how-it-work.scss"

function Procedure() {
    return (
       <div>
           <div className="blank">
               
           </div>
           <div className="procedure">
                <h1 className="procedure-header">How it works</h1>
                <div className="procedure-div">
                    <div className="procedure-sub-div">
                        <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571818153/my%20project/pcb9b24aumpbtl5dlj9m.png" alt="" />
                        <p className="procedure-paragraph">Select your food</p>
                        <p className="procedure-paragraph2">Browse restaurants that deliver near you</p>
                    </div> 
                    <div className="procedure-sub-div">
                        <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571818153/my%20project/erk3qjxzbdmxulvvhahx.png" alt="" />
                        <p className="procedure-paragraph">Receive it at your doorstep</p>
                        <p className="procedure-paragraph2">Your order will be delivered to you in no time</p>
                    </div> 
                    <div className="procedure-sub-div">
                        <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1571818153/my%20project/putabtdgxrvhsj5u6kqu.png" alt="" />
                        <p className="procedure-paragraph">Enjoy your order</p>
                        <p className="procedure-paragraph2">Enjoy your food items</p>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}


export default Procedure