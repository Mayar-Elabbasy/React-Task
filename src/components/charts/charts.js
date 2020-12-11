import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';

const Charts = (props) => {
  return (
    <React.Fragment>
    <div className="container">
    <Row>
      <Col sm="6">
        <Card body style={{padding: "35px"}}> 
          <CardTitle tag="h5">Licence Status</CardTitle>
          
          <div class="progress md-progress">
            <div class="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        
      <CardText style={{float: 'left'}}>Licence No <span style={{color: "lightgray", fontSize:"13px"}}>1234567890</span>
      <span style={{float : "right"}}><span>Remaing Days</span> <span style={{color: "gray", fontSize:"13px"}}>248</span></span>
      </CardText>
        </Card>
      </Col>
      <Col sm="3">
        <Card body style={{padding: "35px"}}>
          <CardTitle tag="h5">Classification</CardTitle>
          <CardText style={{fontSize: "15px"}}>Medical Diagnostic Center</CardText>
          <Button style={{backgroundColor:"transparent", display: "none"}}></Button>
        </Card>
      </Col>
      <Col sm="3">
        <Card body >
          <CardTitle tag="h5">Category</CardTitle>
          <CardText>Medical Laboratory Analysis</CardText>
          <Button style={{borderRadius: "15px",backgroundColor: "transparent",color:"black",
                          width: "50%", fontSize: "10px", height: "20%"}}>Request Change</Button> 
        </Card>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col sm="12">
        <Card body>
        <Col sm="4">
      </Col>
      <Col sm="8">
        <ul style={{float: "right"}}>
          <li style={{backgroundColor: "green", color: "white"}}>Overview</li>
          <li> Staff</li>
          <li> Nearing Expiry</li>
        </ul>
      </Col>
          <CardTitle tag="h5">Category</CardTitle>
          <CardText>Medical Laboratory Analysis</CardText>
        </Card>
      </Col>
    </Row>
    </div>
    </React.Fragment>
  );
};

export default Charts;

