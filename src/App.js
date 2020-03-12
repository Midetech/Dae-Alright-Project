import React from 'react';
import './App.css';
import Navigation from "../src/component/Navigation"
import { Switch, Route } from "react-router-dom"
import Signup from "../src/component/signUp"
import Homepage from './pages/Homepage';
import { auth, createUserProfileDocument } from "./firebase/firebase.util"



class App extends React.Component {
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null 

  componentDidMount() {
     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth)

         userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
         })
       }
       this.setState({currentUser: userAuth})
     })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render() {
    console.log(this.state.currentUser)
      return (
      <div className="App">
        <Homepage currentUser={this.state.currentUser}/>
        <Switch>  
          <Route path="/navigation" component={Navigation} />
          <Route path="/signup" component={Signup} />
        </Switch>
      
      </div>
    );
  }
  
}

export default App;
