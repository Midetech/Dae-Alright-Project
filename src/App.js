import React from 'react';
import './App.css';
import Navigation from "../src/component/Navigation"
import { Switch, Route } from "react-router-dom"
import Signup from "../src/component/signUp"
import Homepage from './pages/Homepage';
import SearchResultPage  from './pages/SearchResultPage'
import SearchRadioButton from './component/SelectFoodRadioButton'
import { auth, createUserProfileDocument } from "./firebase/firebase.util"
import { connect } from "react-redux"
import { userAction } from "./redux/reducers/user/userAction"
import inputTags from '../src/component/inputTags'

class App extends React.Component {
 

  unSubscribeFromAuth = null 

  componentDidMount() {
    const { userAction } = this.props
    
     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth)

         userRef.onSnapshot(snapShot => {
            userAction({
                id: snapShot.id,
                ...snapShot.data()
            })
         })
       }
       userAction(userAuth)
     })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render() {
  
      return (
      <div className="">
        <Switch>  
          <Route path="/" exact component={Homepage} />
          <Route path="/navigation" component={Navigation} />
          <Route path="/signup" component={Signup} />
          <Route path="/searchResult" exact component={SearchResultPage} />
        </Switch>
      
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  userAction: user => dispatch(userAction(user))
})

export default connect(null, mapDispatchToProps)(App);
