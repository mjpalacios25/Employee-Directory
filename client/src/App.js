import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";
import Main from "./pages/Main";
import  AddEmployee from "./pages/AddEmployee";



function App() {
  return (
    <div >
     <Nav />
     <br></br>
     <Router>
       <Switch>
         <Route exact path = {["/", "/Main"]}>
           <Main />
         </Route>
         <Route exact path = {["/AddEmployee"]}>
           <AddEmployee />
         </Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
