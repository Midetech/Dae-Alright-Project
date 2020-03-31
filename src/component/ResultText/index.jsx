import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            
            <div style={{marginTop:'150px',display:'flex',flexDirection:'row',justifyContent:'space-between' ,width:'100%',borderBottom:'solid 1px  rgba(207, 205, 205, 0.637)'}}>
                <h5 style={{marginLeft:'170px'}}>Showing all 6 results</h5>
                <div style={{marginRight:'-580px'}}> 
                    <select style={{fontWeight:'bold',color:'rgba(0, 0, 0, 0.6)'}}>
                        <option value="Default Sorting">Default Sorting</option>
                    </select>
                </div><br/><br/><br/>
            </div>
        )
    }
}

export default index
