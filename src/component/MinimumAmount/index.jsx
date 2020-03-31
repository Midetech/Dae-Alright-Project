import React, { Component } from 'react'
import '../MinimumAmount/minimum.css';

 class index extends Component {
   
    render() {
        
        return (
            
            <div>
< input className='range' type="range" id="points" name="points" min="0" max="10"></input>
<div style={{display:'flex', flexDirection:'row',justifyContent:'space-between' ,marginTop:'-10px'}}>
    <p className='f0'>0</p>
    <p className='f10'>10</p>
</div>
            </div>
        )
        
    }
}

export default index
