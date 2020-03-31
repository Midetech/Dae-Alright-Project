import React, { Component } from 'react'
import '../SearchFilter/SearchFilter.css'
import SearchRadioButton from '../SelectFoodRadioButton';
import InputTags from '../inputTags'
import MinimumAmount from '../MinimumAmount'
import Rating from '../Rating'

 class SearchFilter extends Component {
     
    render() {
        return (
            <div className='maindiv'>
                <div className ="divhead"><h3 className="texta">Search Filter</h3></div><br/>
                <input className='inputfood' placeholder='Search Your Favourite Food'></input><br/><br/>
                <form>
                <SearchRadioButton/>
                </form>
                <div className='foodfor'>
                    <h5>FOOD FOR</h5>
                    <input type='radio'/><label>Delivery</label>
                    <input type='radio'/><label>Pick Up</label><br/>
                </div>
                <div style={{borderBottom:'solid 1px  rgba(207, 205, 205, 0.637)'}} className='tagshead'>
                    <h5>Tags</h5>
                    <InputTags/>
                </div>
                <div style={{borderBottom:'solid 1px  rgba(207, 205, 205, 0.637)'}}className ='minimum'>
                <h5>Minimum Order Amount</h5>
                    <MinimumAmount/>
                </div>
                <div>
                    <Rating/>
                </div><br/><br/>
            </div>
        )
    }
}

export default SearchFilter
