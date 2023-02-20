import React from 'react';
// import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  
}
from 'mdb-react-ui-kit';
import {  Form } from "react-bootstrap";
import Navbar from '../Components/Navbar';
import Doctor from "../images/Doctor.png";

import Footer from '../Components/Footer';
function App() {
  return (
    <MDBContainer fluid className='my-5'>
        <Navbar/>
      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>
          <div  className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 '>
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>
                <Form.Group className="mb-3" controlId="Name">
                        <Form.Control type="text" placeholder="EmailAddress" />
                        <Form.Label className="text-center">
                        Email Address
             </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Name">
                        <Form.Control type="text" placeholder="Enter Password" />
                        <Form.Label className="text-center">
                         Password
             </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Name">
                        <Form.Control type="text" placeholder="Confirm Password" />
                        <Form.Label className="text-center">
                        Conform Password
             </Form.Label>
                </Form.Group>
              <div>
             </div>
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
              <div className="text-center">
              </div>
              <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                    <a href="{''}" className="text-primary fw-bold">
                          Sign In
                     </a>
                </p>
            </div>
            </MDBCardBody>
          </div>
        </MDBCol>
        <MDBCol col='6'>
          <img src={Doctor} class="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>
      </MDBRow>
      <Footer/>
    </MDBContainer>
  );
}

export default App;