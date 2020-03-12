import React from 'react'
import "./navigation.scss"
import logo from "../../../src/logo.svg"
import Cart from "../../../src/cart.svg"
import SignIn from '../signIn'
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.util"

class Navigation extends React.Component {
  state = {
    show: false,
    login: true
  }
    showModal = () => {
        this.setState({show: true})
    }
    hideModal = () => {
        this.setState({show: false})
    }
  render() {
    console.log(this.props.currentUser)
      return (
      <div className="navigation">
        <Link to="/"><img src={logo} alt="Dae alright logo" /></Link>
        <SignIn show={this.state.show} handleClose={this.hideModal} />
        <div className="nav-div">
          <img className="cart-logo" src={Cart} alt="Cart logo" />
          {
            this.props.currentUser ?
            <div className="log-out-div"  onClick={() => auth.signOut() }>
              <p className="log-out">SIGN OUT</p>
              <p className='log-out2'>Welcome {this.props.currentUser.displayName}</p>
            </div> 
            : 
            <button className="button" type='button' onClick={this.showModal}>LOGIN IN / SIGN UP</button>
          }
        </div>
      </div>
    )
  }

}
export default Navigation