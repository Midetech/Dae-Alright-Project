import React from "react"
import "./header-wrapper.scss"
import propTypes from "prop-types"



function HeaderWraper(props) {
    return (
        <header className="header-wrapper">
            {props.renderProp()}
        </header>

    )
}

HeaderWraper.propTypes = {
    renderProp: propTypes.func
}


export default HeaderWraper