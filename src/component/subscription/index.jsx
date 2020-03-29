import React from "react"
import "./subscription.scss"


class Subscription extends React.Component {
    state = {
        name: '',
        email: '',
    }

    handleChange = (e) => {
        const { name } = e.target
        this.setState({[name]: e.target.value})
    }
    render() {
        const { name, email } = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 subscription">
                        <h1 className="subscription-header">Subscribe to our news letter</h1>
                        <p className="subscription-paragraph">Don't miss out on our great offers & Receive deals from all our
                            <br />top restaurants via e-mail.</p>
                        <div className="subscription-input">
                            <div>
                                <form>
                                    <input type="text" className="sub-input" placeholder="Name" name="name" value={name} onChange={this.handleChange}/>
                                    <input type="text" className="sub-input" placeholder="Email" name="email" value={email} onChange={this.handleChange}/>
                                    <button type="button" className="sub-button">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
    
}


export default Subscription