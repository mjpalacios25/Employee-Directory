import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import {EmplyeeCard, CardItem} from "../components/EmployeeCard";
import {Container, Row, Col} from "../components/Grid";
import API from "../utils/API"

function EmployeeInfo() {

    const [employees, setEmployees] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        API.getEmployee(id)
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err));
    }, [])
  
  
    
    return (
      <div >
       
       <Container fluid>
         <Row fluid>
           
           
           <Col size ="md-6">
            
             
               <EmplyeeCard>
                
                  <CardItem key = {employees._id}>
                    
                      <strong>
                        Name: {employees.name} <br></br> Department: {employees.department} <br></br> Position: {employees.role}
                        <br></br> id: {employees._id}
                      </strong>
                   
        
                  </CardItem>
               
                
              </EmplyeeCard>
             
           </Col>
          
         </Row>
       </Container>
       
      </div>
    );
  }
  
  export default EmployeeInfo;