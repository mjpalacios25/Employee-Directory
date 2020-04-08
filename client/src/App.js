import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";
import Main from "./pages/Main";
import EmployeeInfo from "./pages/EmployeeInfo";



function App() {
  return (
    <div >
     <Nav />
     <Router>
       <Switch>
         <Route exact path = {["/", "/Main"]}>
           <Main />
         </Route>
         <Route exact path = {"/Employee/:id"}>
           <EmployeeInfo />
         </Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
