import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './Styles.css'
class index extends Component {
    render() {
        return (
            <div className='radiobuttons'>
        <input type='radio'/><label>Local Assorted</label><br/>
        <input type='radio'/><label>Wanke Oyinbo</label><br/>
        <input type='radio'/><label>Oyinbo Fufu</label><br/>
        <input type='radio'/><label>Chicken Pie</label><br/>
        <input type='radio'/><label>Garri Combo</label><br/>
        <input type='radio'/><label>Beef Stew</label>
            </div>
        )
    }
}

export default index
