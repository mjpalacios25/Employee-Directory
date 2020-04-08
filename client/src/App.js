import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";
import {EmplyeeCard, CardItem} from "./components/EmployeeCard"


function App() {
  return (
    <div >
     <Nav />
     <EmplyeeCard>
       <CardItem>Thing One</CardItem>
       <CardItem>Thing Two</CardItem>
     </EmplyeeCard>
    </div>
  );
}

export default App;
