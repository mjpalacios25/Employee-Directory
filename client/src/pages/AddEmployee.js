import React, { useState, useEffect } from 'react';
import {EmployeeInput, FormBtn} from "../components/Form";
import {Container, Row, Col} from "../components/Grid";
import API from "../utils/API";
import {Render} from "react-dom";
import Main from "../pages/Main"

function AddEmployee() {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const {name, value} = event.target;
    console.log(event.target)
    console.log(value);
    console.log(formObject);
    setFormObject({...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    
      API.saveEmployee({
        name: formObject.name ,
        department: formObject.department,
        role: formObject.role,
        email: formObject.email,
      })
        //.then(  window.location.href ="/Main" )
        .catch(err => console.log(err));
    
  };
    
  return (
    <div>
      <Container>
        <Row>
          <Col size = "md-6">
            <h1>Add Employee</h1> <br></br>
            <form>
              <EmployeeInput 
              onChange={handleInputChange}
              name = "name" 
              placeholder="Enter Full Name" 
               />
              <EmployeeInput 
              onChange={handleInputChange}
              name = "department"
              placeholder="Enter Department" 
               />
              <EmployeeInput 
              onChange={handleInputChange}
              name = "role"
              placeholder="Enter Position Title" 
               />
              <EmployeeInput 
              onChange={handleInputChange}
              name = "email"
              placeholder="Enter Email" 
               />
              <FormBtn 
              // disabled={!(formObject.name)}
              onClick={handleFormSubmit}
              >
                Add Employee
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
    
  }
  
  export default AddEmployee;