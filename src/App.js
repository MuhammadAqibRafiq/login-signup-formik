import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar'
import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from './Components/Login'
import Signup from './Components/SignUp'
import Forgot from './Components/Forgot'

// import Home from './Components/Home'


function App() {
  return (
    <div className="App">

      <Router>
      <NavBar/>
      {/* <Route path="/home" component={Home}/> */}
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/forget" component={Forgot}/>

      

      </Router>

    </div>
  );
}

export default App;
