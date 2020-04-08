import React from 'react';
import {EmplyeeCard, CardItem} from "../components/EmployeeCard";
import {Container, Row, Col} from "../components/Grid"


function Main() {
  return (
    <div >
     
     <Container fluid>
       <Row fluid>
         <Col size ="md-12">
            <EmplyeeCard>
              <CardItem>Thing One</CardItem>
              <CardItem>Thing Two</CardItem>
            </EmplyeeCard>
         </Col>
       </Row>
     </Container>
     
    </div>
  );
}

export default Main;