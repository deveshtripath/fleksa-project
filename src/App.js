import './App.css';
import Header from "./Header"
import React,{useEffect} from "react";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    
      <Router>
    <div className="App">
        <Switch>
        <Route exact path="/home">
              <Header/>
              <Checkout/>
              </Route>


          <Route path="/">
            <Header/>
            <Home/>
          </Route>
          
              
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
