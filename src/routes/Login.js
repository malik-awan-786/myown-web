import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './loginpage.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom'
// import logo from "../images/logo.png";
import Navbar from "../Components/Navbar";
import Doctor from "../images/Doctor.png";
import Footer from "../Components/Footer";
// import { textAlign } from "@mui/system";
function App() {
  return (
    <div>
      <Navbar />,
      <MDBContainer className="my-5">
        <div className="container">
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={Doctor}
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>
            
            <MDBCol className="loginpage"   md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
              <h2 className="fw-bold mb-2 text-uppercase" class="text-center">Sign In </h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
                </div>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />
              <input class="btn btn-primary" type="button" value="Signin" />
              <div class="text-center">
                <a class="text-center"  href="#">Forgot password?</a>
                <Link to="/Signup"  class="nav-link"> <p className='ms-5'>Don't have an account? <a href="" class="link-info">Register here</a></p> </Link>
            
                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#" className="small text-muted">
                    Privacy policy
                  </a>
                  </div>
                </div>
                 </MDBCardBody>
            </MDBCol>
            
          </MDBRow>
        </div>
      </MDBContainer>
      <Footer />,
    </div>
  );
}

export default App;
