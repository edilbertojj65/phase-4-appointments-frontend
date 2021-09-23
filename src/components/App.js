
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Patients from "./PatiensForm";
import {  BrowserRouter as Router } from "react-router-dom" ; 
import { NavLink } from "react-router-dom";
 

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  

  return (
     <div className="App">
       <Router>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/patients">Patients</NavLink>
          <NavLink to="/Physician">Physician</NavLink>
         </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/patients">
            <Patients />
          </Route>
          {/* <Route path="/Physician">
            <Physician />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> 
       
    </div>
  );
}

export default App;