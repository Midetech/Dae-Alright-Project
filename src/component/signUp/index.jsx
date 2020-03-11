import React from "react"
import "./signup.scss"
import Navigation from "../Navigation"
import { Link } from "react-router-dom"

class Signup extends React.Component {
    state = {
        email:'',
        password: '',
        show: true
    }
    showModal = () => {
        this.setState({show: true})
    }
    hideModal = () => {
        this.setState({show: false})
    }
render() {
    const { show } = this.state

    const showHideClassName = show ? "modal display-block" : 'modal display-none'

    return (
            <div>
                 <Navigation />
                <div className={showHideClassName}>
               
                <div className="modal-main">
                    <div className="sign-in-div">
                        <h1 className="cancel">Sign Up</h1>
                        <p className="close" onClick={this.hideModal}>X</p>
                    </div>
                    
                    <p className="welcome2">Hi, Welcome fill in the input to proceed shopping</p>
                    <form>
                        <div className="sign-in_inputs">
                            <input type="text" placeholder="Full Name" name='fullName' className='input-sign' value={this.state.fullName} onChange={this.handleChange} />  
                            <input type="email" placeholder="Email" name='email' className='input-sign' value={this.state.email} onChange={this.handleChange} />
                            <input type="password" placeholder="Password" name='password' className='input-sign' value={this.state.password} onChange={this.handleChange} />    
                             <input type="password" placeholder="Confirm Password" name='confirmPassword' className='input-sign' value={this.state.confirmPassword} onChange={this.handleChange} />
                         </div>
                        

                        <button className="login" type="submit">Login</button>

                        <p className="not-signed">Already Sign Up?<Link to='/navigation'> Sign In</Link></p>
                        
                    </form> 

                </div>
             </div>
            </div>
            
            
    )
}
}

export default Signup