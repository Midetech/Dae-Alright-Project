import React from "react"
import "./signup.scss"
import { Link } from "react-router-dom"
import { auth, createUserProfileDocument } from "../../firebase/firebase.util"
class Signup extends React.Component {
    state = {
        displayName: '',
        email:'',
        password: '',
        confirmPassword: '',
        show: true
    }
    showModal = () => {
        this.setState({show: true})
    }
    hideModal = () => {
        this.setState({show: false})
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("password don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }
render() {
    const { show, displayName, email, password, confirmPassword } = this.state

    const showHideClassName = show ? "modal display-block" : 'modal display-none'

    return (
            <div>
                
                <div className={showHideClassName}>
               
                <div className="modal-main">
                    <div className="sign-in-div">
                        <h1 className="cancel">Sign Up</h1>
                        <p className="close" onClick={this.hideModal}>X</p>
                    </div>
                    
                    <p className="welcome2">Hi, Welcome fill in the input to proceed shopping</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="sign-in_inputs">
                            <input type="text" placeholder="display Name" name='displayName' className='input-sign' value={displayName} onChange={this.handleChange} />  
                            <input type="email" placeholder="Email" name='email' className='input-sign' value={email} onChange={this.handleChange} />
                            <input type="password" placeholder="Password" name='password' className='input-sign' value={password} onChange={this.handleChange} />    
                            <input type="password" placeholder="Confirm Password" name='confirmPassword' className='input-sign' value={confirmPassword} onChange={this.handleChange} />
                         </div>
                        

                        <button className="login" type="submit">Sign Up</button>

                        <p className="not-signed">Already Sign Up?<Link to='/'> Sign In</Link></p>
                        
                    </form> 

                </div>
             </div>
            </div>
            
            
    )
}
}

export default Signup