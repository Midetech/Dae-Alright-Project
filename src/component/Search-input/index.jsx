import React from "react"
import "./search-input.scss"


class SearchInput extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="search-input">
                <select className="search-select">
                    <option>Select your city</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Ibadan</option>
                </select>
                <select className="search-select">
                    <option>Select your Location</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Ibadan</option>
                </select>
                <input className="search-button" type="button" value="Find Food" />
            </div>
        )
    }
}

export default SearchInput