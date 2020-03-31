import React, { Component } from 'react'
import './rating.css'
import { FaStar,FaRegStar } from 'react-icons/fa';

 class index extends Component {
    render() {
        return (
            <div className="checks">
                <h5>Rating</h5><br/>
            <input className="checkbox" id='check' type="checkbox"/>
            <label className="labelcheck" htmlFor="check"></label>
         <FaStar style={{color:'#D6DB46',position:'relative',left:'40px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'45px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'50px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'55px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'60px', marginTop:'-2px', fontSize:'20px'}} /><br/><br/>
            <input className="checkbox" id='checkb' type="checkbox"/>
            <label className="labelcheck" htmlFor="checkb"></label>
         <FaStar style={{color:'#D6DB46',position:'relative',left:'40px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'45px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'50px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'55px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'60px', marginTop:'-2px', fontSize:'20px', }} /><br/><br/>
            <input className="checkbox" id='checkc' type="checkbox"/>
            <label className="labelcheck" htmlFor="checkc"></label>
         <FaStar style={{color:'#D6DB46',position:'relative',left:'40px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'45px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'50px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'55px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'60px', marginTop:'-2px', fontSize:'20px', }} /><br/><br/>
            <input className="checkbox" id='checkd' type="checkbox"/>
            <label className="labelcheck" htmlFor="checkd"></label>
         <FaStar style={{color:'#D6DB46',position:'relative',left:'40px', marginTop:'-2px', fontSize:'20px'}} />
         <FaStar style={{color:'#D6DB46',position:'relative',left:'45px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'50px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'55px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'60px', marginTop:'-2px', fontSize:'20px', }} /><br/><br/>
            <input className="checkbox" id='checke' type="checkbox"/>
            <label className="labelcheck" htmlFor="checke"></label>
         <FaStar style={{color:'#D6DB46',position:'relative',left:'40px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'45px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'50px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'55px', marginTop:'-2px', fontSize:'20px'}} />
         <FaRegStar style={{color:'#D6DB46',position:'relative',left:'60px', marginTop:'-2px', fontSize:'20px', }} />
            </div>
        )
    }
}

export default index
