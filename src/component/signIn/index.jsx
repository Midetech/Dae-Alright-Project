import React from "react"
import "./sign-in.scss"
import { Link } from "react-router-dom"
import { signInWithGoogle } from "../../firebase/firebase.util"
class SignIn extends React.Component {
        state = {
            email:'',
            password: '',
        }
        handleChange = (e) => {
            const { name, value} = e.target
            this.setState({[name]: value})
        }
    render() {
         const { handleClose, show,} = this.props

         const showHideClassName = show ? "modal display-block" : "modal display-none"

        return (
            <div className={showHideClassName}>
                
                <div className="modal-main">
                    
                    <div className="sign-in-div">
                        <h1 className="cancel">Sign In</h1>
                        <p className="close" onClick={handleClose}>X</p>
                    </div>
                    
                    <p className="welcome">Welcome back, Bosun Jones</p>
                    <form>
                        <div className="sign-in_inputs">
                         <input type="email" placeholder="Email" name='email' className='input-sign' value={this.state.email} onChange={this.handleChange} />
                            <input type="password" placeholder="Password" name='password' className='input-sign' value={this.state.password} onChange={this.handleChange} />    
                        </div>
                        <a className="forget" href=""><p className="forget">Forgot Password ?</p></a>

                        <button className="login" type="submit">Login</button>

                        <p className="not-signed">Not Signed In?<Link to='/signup'>Sign Up</Link></p>

                        <button className="facebook" type="submit">Sign Up With Facebook</button>
                        <button className="google" type="button" onClick={signInWithGoogle}>Sign Up With Google</button>
                        
                    </form>

                </div>
            </div>
                
        )
    }
}

export default SignIn