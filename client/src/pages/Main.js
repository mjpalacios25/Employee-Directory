import React, { useState, useEffect } from 'react';
import {EmplyeeCard, CardItem} from "../components/EmployeeCard";
import { Link } from "react-router-dom";
import {Container, Row, Col} from "../components/Grid";
import API from "../utils/API"


function Main() {

  const [employees, setEmployees] = useState([]);

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

  // function deleteEmployee(id){
  //   API.deleteEmployee(id)
  //   .then(res => loadEmployees())
  //   .catch(err => console.log(err));
  // };
console.log(employees.length )
  

  return (
    <div >
     
     <Container fluid>
       <Row fluid>
         <Col size ="md-6">

           {employees.length ? (
             <EmplyeeCard>
              {employees.map(employee => (
                <CardItem key = {employee._id}>
                  <Link to= {"/employee/" + employee._id}>
                    <strong>
                      {employee.name}, {employee.department}, {employee.role}
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