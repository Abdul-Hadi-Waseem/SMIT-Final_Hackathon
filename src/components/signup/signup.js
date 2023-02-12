import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./signup.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Center, Square, Circle } from "@chakra-ui/react";

function Signup() {
  const [error, setError] = useState("");
  const [values, setVal] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
  });

  const nevigate = useNavigate();

  const onfnamehandler = (e) => {
    e.preventDefault();
    values.fname = e.target.value;
  };
  const onlnamehandler = (e) => {
    e.preventDefault();
    values.lname = e.target.value;
  };

  const onemailhandler = (e) => {
    e.preventDefault();
    values.email = e.target.value;
  };

  const onpasshandler = (e) => {
    e.preventDefault();
    values.pass = e.target.value;
  };

  const onClickhandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then((resp) => {
        const user = resp.user;
        nevigate("/");
      })
      .catch((resp) => {
        setError(resp.message);
      });
    };
    
    return (
    <>
      <MDBContainer fluid className="p-4">
    <Center>

        <MDBRow>
          <div
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center">
            <span className="text-primary">
              <image />
            </span>

            {/* <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
           <img src="./download.png" alt="" width= "510px"  />
          </p> */}
          </div>

          <MDBCol md="15">
            <Center>
              <img src="./downloadr.png" alt="" />
            </Center>
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="10">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                      onChange={onfnamehandler}
                      />
                  </MDBCol>

                  <MDBCol col="10">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form1"
                      type="text"
                      onChange={onlnamehandler}
                      />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  onChange={onemailhandler}
                  />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  onChange={onpasshandler}
                  />

                <h6>{error}</h6>

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Want To Receives Updates Via Email?"
                    />
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={onClickhandler}>
                    Register
                  </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
                      </Center>
      </MDBContainer>
    </>
  );
}

export default Signup;
