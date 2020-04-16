import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {EmplyeeCard, CardItem} from "../components/EmployeeCard";
import {Input} from "../components/Form"
import {Container, Row, Col} from "../components/Grid";
import {DeleteBtn, SortBtn} from "../components/Buttons"
import {InfoContainer, CardHeader, CardBody} from "../components/InfoContainer"
import API from "../utils/API"
import profileImage from "../assets/images/profile.png"


function Main() {

  const [employees, setEmployees] = useState([]);
  const [detail, setDetail] = useState({
    _id: "",
    name: "",
    department: "",
    role: "",
    email: ""
  })
  //const [formObject, setFormObject] = useState({});

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

  function deleteEmployees(id){
    API.deleteEmployee(id)
    .then(res => loadEmployees())
    .catch(err => console.log(err));
  };

  
  function showInfo(id) {
    
    let [highlight] = employees.filter(person => person._id === id );
    console.log(highlight);
    const {name, department, role, email} = highlight;
    console.log(name, department);
    console.log(detail);
    setDetail(highlight)
    
  };

  function sortName() {
    API.getEmployees()
      .then(res => {
        setEmployees(res.data)
        
      })
      .catch(err => console.log(err));
  };

  function sortDepartment() {
    API.sortbyDepartment()
      .then(res => {
        setEmployees(res.data)
        
      })
      .catch(err => console.log(err));
  };

  const divStyle = {
    textDecoration: 'underline',
    color: `teal`
  }
  return (
    <div >
    
     <Container fluid>
       <Row>
         
         
         <Col size ="md-6">
            <form>
              <Input
                onChange= {handleInputChange}
                name="title"
                placeholder="Title (required)" text="Search"
              /> 
            </form>
            <div className="btn-group" role="group">
              <SortBtn onClick={() => sortName()} >Sort by Name</SortBtn>
              <SortBtn onClick={() => sortDepartment()}> Sort by Department</SortBtn>
              <SortBtn onClick={() => window.location.href = "/AddEmployee" } > Add New Employee</SortBtn>
              
            </div>
            
           {employees.length ? (
             <EmplyeeCard>
              {employees.map(employee => (
                <CardItem key = {employee._id}>
                  <a style = {divStyle} href="#" >
                  <strong onClick={() => showInfo(employee._id)}>
                      Name: {employee.name} <br></br> Department: {employee.department}
                  </strong></a>
                  <DeleteBtn onClick={() => deleteEmployees(employee._id)} />
                </CardItem>
              ))}
              
            </EmplyeeCard>
           ) : (
            <h3>No Results to Display</h3>
           ) }
         </Col>
         <Col size= "md-6">
           <InfoContainer >
             <CardHeader>
               {detail.name ? <h2> {detail.name}  </h2> : <h2> Select an Employee </h2>} 
             </CardHeader>
             <img
              className="center-block mt-3"
              style={{ width: "200px", margin: "0 auto" }}
              src={profileImage}
              alt="profile"/>
             <CardBody>
               
               {detail.name ? <div>  
                 <h3>Department: {detail.department} 
                 </h3> <h3>Role: {detail.role} </h3> 
                 <h3>Email: {detail.email} </h3> </div>
                 : " "} 
               
               
               
             </CardBody>
           </InfoContainer>
            
         </Col>
       </Row>
     </Container>
 
     
    </div>
  );
}

export default Main;