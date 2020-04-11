import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {EmplyeeCard, CardItem} from "../components/EmployeeCard";
import {Input} from "../components/Form"
import {Container, Row, Col} from "../components/Grid";
import API from "../utils/API"


function Main() {

  const [employees, setEmployees] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadEmployees()
  }, [])

  function loadEmployees() {
    API.getEmployees()
      .then(res => {
        setEmployees(res.data)
        
      })
      .catch(err => console.log(err));
  };

//filters out employees as you type into the toolbar
  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(value);
    let result = employees.filter(people => people.name.toLowerCase().includes(value)  )
    console.log(result);
    setEmployees(result);

    if(!value){ loadEmployees() }
  };

  function deleteEmployee(id){
    API.deleteEmployee(id)
    .then(res => loadEmployees())
    .catch(err => console.log(err));
  };
  
  return (
    <div >
     
     <Container fluid>
       <Row fluid>
         
         
         <Col size ="md-6">
            <form>
              <Input
                onChange= {handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            </form>
           {employees.length ? (
             <EmplyeeCard>
              {employees.map(employee => (
                <CardItem key = {employee._id}>
                  <Link className="text-dark" to= {"/employee/" + employee._id}>
                    <strong>
                      Name: {employee.name} <br></br> Department: {employee.department} <br></br> Position: {employee.role}
                    </strong>
                  </Link>
                </CardItem>
              ))}
              
            </EmplyeeCard>
           ) : (
            <h3>No Results to Display</h3>
           ) }
         </Col>
       </Row>
     </Container>
     
    </div>
  );
}

export default Main;