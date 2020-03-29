import React, { Component } from 'react'
import '../SearchFilter/SearchFilter.css'

export class SearchFilter extends Component {
    render() {
        return (
            <div className='maindiv'>
                <div className ="divhead"><h3 className="texta">Search Filter</h3></div>
                <form>
                <input  className="inputfood"type='text' placeholder ='    Search Your Favourite Food...'/><br/>
                <input className='first-radio' type ="radio" placeholder="Local Assorted"/>
                </form>
            </div>
        )
    }
}

export default SearchFilter
