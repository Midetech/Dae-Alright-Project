import React from 'react'
import "./navigation.scss"
import logo from "../../../src/logo.svg"
import Cart from "../../../src/cart.svg"
import SignIn from '../signIn'



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
      return (
      <div className="navigation">
        <img src={logo} alt="Dae alright logo" />
        <SignIn show={this.state.show} handleClose={this.hideModal} />
        <div className="nav-div">
          <img className="cart-logo" src={Cart} alt="Cart logo" />
          <button className="button" type='button' onClick={this.showModal}>LOGIN IN / SIGN UP</button>
        </div>
      </div>
    )
  }

}
export default Navigation