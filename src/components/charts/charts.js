import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import { Progress } from 'reactstrap';


const Charts = (props) => {
  return (
    <React.Fragment>
    <div className="container mt-5">
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
          <ul style={{float: "right"}}>
            <li style={{backgroundColor: "green", color: "white"}}>Overview</li>
            <li> Staff</li>
            <li> Nearing Expiry</li>
          </ul>
        <Row>
        <Col sm="4" className="mb-5">
          <div class="wrapper">
            <div class="spinner pie"></div>
            <div class="filler pie"></div>
            {/* <div class="mask"></div> */}
          </div>
        </Col>
        <Col sm="8">
          <CardTitle tag="h5" style={{fontWeight: "bold"}}>
            Some Items Require Your Attention
          </CardTitle>
         
        </Col>
        </Row>

        <h4 style={{ fontWeight: "bold"}} className="text-left mb-3">Facility Information</h4>
        <Row>
          <Col sm="6">
            <Card className="mb-2 p-1 main-cards">
              <CardTitle tag="h5" className="text-left ml-5">
                Main Information
                <span className="mr-3 mt-2" style={{float: "right", fontSize: "14px"}}>
                  See Details
                </span>
              </CardTitle>
              
            </Card>
            <Card className="mb-2 p-1 main-cards">
              <CardTitle tag="h5" className="text-left ml-5">Owner Information
                <span className="mr-3 mt-2" style={{float: "right", fontSize: "14px"}}>
                  See Details
                </span>
              </CardTitle>
            </Card>
            <Card className="mb-2 p-1 main-cards">
              <CardTitle tag="h5" className="text-left ml-5">Medical Director
                <span className="mr-3 mt-2" style={{float: "right", fontSize: "14px"}}>
                  See Details
                </span>
              </CardTitle>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="mb-2 p-1 main-cards">
              <CardTitle tag="h5" className="text-left ml-5">Contact Information
              <span className="mr-3 mt-2" style={{float: "right", fontSize: "14px"}}>
                  See Details
                </span>
              </CardTitle>
            </Card>
            <Card className="mb-2 p-1 main-cards">
              <CardTitle tag="h5" className="text-left ml-5">Partener Information
                <span className="mr-3 mt-2" style={{float: "right", fontSize: "14px"}}>
                  See Details
                </span>
              </CardTitle>
            </Card>
            <Card className="mb-2 p-1 main-cards">
              <CardTitle tag="h5" className="text-left ml-5">Location Information
                <span className="mr-3 mt-2" style={{float: "right", fontSize: "14px"}}>
                  See Details
                </span>
              </CardTitle>
            </Card>
          </Col>
        </Row>
          
          
           
        </Card>
      </Col>
    </Row>
    </div>
    </React.Fragment>
  );
};

export default Charts;

