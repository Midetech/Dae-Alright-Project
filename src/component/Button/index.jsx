import React from "react"
import "./button.scss"


const Button = ({name}) => {
    return (
       
            <button className="custom-button" type="button">{name}</button>
      
        
    )
}

export default Button