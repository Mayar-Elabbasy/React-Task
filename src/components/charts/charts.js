import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, Row, Col } from 'reactstrap';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['Dentist', 'Cardiologist', 'General Surgery', 'Emergency doctors'],
  datasets: [
    {
      label: 'Staff',
      backgroundColor: 'darkred',
      borderColor: 'gray',
      borderWidth: 1,
      hoverBackgroundColor: 'gray',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [10, 14, 6, 4,]
    }
  ]
}

const Charts = (props) => {
  return (
    <React.Fragment>
    <div className="container mt-5 mb-4">
      <Row>
        <Col sm="6">
          <Card body style={{padding: "35px"}}> 
            <CardTitle tag="h5">Licence Status</CardTitle>
            <div className="progress md-progress">
              <div className="progress-bar bg-success" role="progressbar" 
                  style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>    
            <CardText style={{float: 'left'}}>Licence No 
              <span style={{color: "lightgray", fontSize:"13px"}}>1234567890</span>
              <span style={{float : "right"}}>
                <span>Remaing Days</span> 
                <span style={{color: "gray", fontSize:"13px"}}>248</span>
              </span>
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
    </div>
    {/*  */}
    <div className="container">
      <Row className="mt-3">
        <Col sm="12">
          <Card body>
            <ul style={{float: "right"}} className="mb-4 small-nav" >
              <li style={{backgroundColor: "green", color: "white"}}>Overview</li>
              <li> Staff</li>
              <li> Nearing Expiry</li>
            </ul>
            <Row>
              <Col sm="4" className="mb-5">
                <div className="wrapper">
                  <div className="spinner pie"></div>
                  <div className="filler pie"></div>
                  {/* <div class="mask"></div> */}
                </div>
              </Col>
              <Col sm="8">
                <CardTitle tag="h5" style={{fontWeight: "bold"}}>
                  Some Items Require Your Attention
                </CardTitle>
                <HorizontalBar data={data} />
              </Col>
            </Row> 
          </Card>
        </Col>
      </Row>
    </div>
    {/*  */}
    <div className="container mb-4">
      <h4 style={{ fontWeight: "bold"}} className="text-left mb-3 mt-5">Facility Information</h4>
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
    </div> 
    {/*  */}
    <section className="mb-4 p-4 priority-services">
      <div className="container">
        <h4 style={{ fontWeight: "bold"}} className="text-left mb-3 mt-5">Priority Services</h4>
        <Row>
          <Col sm="4">
            <Card className="p-3">
              <CardTitle tag="h5" className="text-left ml-5 m-3 mb-4 text-success font-weight-bold">
                Medical Establishment 
              </CardTitle>
              <ul className="mb-4 main-options" >
                <li style={{backgroundColor: "lightgray"}}>Request New Licence</li>
                <li>Complain and Suggestion</li>
                <li>Change Medical Director</li>
                <li>Change Owner</li>
                <li>Add / Remove Partner</li>
              </ul>
            </Card>
          </Col>
          <Col sm="8">
            <Row>
            <Col sm="6">
              <Card className="mb-2 p-1">
                <CardTitle tag="h5" className="text-left ml-5 mt-4 m-3 mb-4 text-success font-weight-bold">
                  Location Service
                </CardTitle>
                <ul className="mb-3 sub-options" >
                  <li>Change Location Service</li>
                  <li>Change Layouts / Add Extensions</li>
                </ul>
                <CardSubtitle tag="h6" className="mb-2 text-muted text-right mr-4">
                  See More
                </CardSubtitle>
              </Card>
              <Card className="mb-2 p-1">
                <CardTitle tag="h5" className="text-left ml-5 mt-4 m-3 mb-4 text-success font-weight-bold">
                  Cancel License Service 
                </CardTitle>
                <ul className="mb-3 sub-options" >
                  <li>Cancel License</li>
                  <li>Re-Registration</li>
                </ul>
                <CardSubtitle tag="h6" className="mb-2 text-muted text-right mr-4">
                  See More
                </CardSubtitle>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="mb-2 p-1">
                <CardTitle tag="h5" className="text-left ml-5 mt-4 m-3 mb-4 text-success font-weight-bold">
                  Staff Service
                </CardTitle>
                <ul className="mb-3 sub-options" >
                  <li>Add New Staff</li>
                  <li>Cancel Staff Licence</li>
                </ul>
                <CardSubtitle tag="h6" className="mb-2 text-muted text-right mr-4">
                  See More
                </CardSubtitle>
              </Card>
              <Card className="mb-2 p-1">
                <CardTitle tag="h5" className="text-left ml-5 m-3 mt-4 mb-4 text-success font-weight-bold">
                  Speciality Service
                </CardTitle>
                <ul className="mb-3 sub-options" >
                  <li>Change Medical Activity</li>
                  <li>Add / Remove Specialty</li>
                </ul>
                <CardSubtitle tag="h6" className="mb-2 text-muted text-right mr-4">
                  See More
                </CardSubtitle>
              </Card>
            </Col>
            </Row>
          </Col>
        </Row> 
      </div> 
    </section>
    {/*  */}
    </React.Fragment>
  );
};

export default Charts;

