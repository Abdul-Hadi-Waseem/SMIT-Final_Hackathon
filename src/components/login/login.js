import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox} from 'mdb-react-ui-kit';
import "./login.css"
import { useState } from 'react';
import"./login.css"
import {signInWithEmailAndPassword} from "firebase/auth";
import{auth} from "../firebaseConfig"
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthSlice from '../../redux/authSlice';
import logo from "../images/logo.png"
import { Center } from '@chakra-ui/react';


function Loginform() {
    const navigate = useNavigate();
    const [submit,setSubmit] = useState(false);
    const [error,setError] = useState("")
    const [values,setValues] = useState({
        email:"",
        password:""
    });

    const dispatch = useDispatch();

    const onEmailHandler = (e) => {
         e.preventDefault();
         values.email = e.target.value;
        }
    const onPasswordHandler = (e) => {
        e.preventDefault();
        values.password = e.target.value;
    }

    const onClickHandler = async (e) =>{
      const adminId="admin";
      const adminPass="admin";
        e.preventDefault();
        
        if(!values.email||!values.password)
        {
            setError("please fill all the fields !")   
        }else if(values.email==adminId && values.password==adminPass){
          navigate("adminpanel")

        }   
        await signInWithEmailAndPassword(auth,values.email,values.password)
        .then((resp)=>{
            const user = resp.user;
           navigate("home")
        })
        .catch((resp)=>{setError(alert(resp.message))})
    }
            
    const onsignupHandler = (e) => {
        e.preventDefault();
        navigate("signup");
        dispatch(AuthSlice.Login());
    }



  return (
    <MDBContainer fluid className="p-3 my-5">

<Center>
      <MDBRow>

        <MDBCol col='12' md='12'>
          <div className='d-flex justify-content-center mx-4 mb-4'>
          <img src={logo} className="img-fluid" alt="Phone image" />
          </div>
        </MDBCol>

        <MDBCol col='12' md='12'>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={onEmailHandler} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"   onChange={onPasswordHandler} />


          <div className="d-flex justify-content-center mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Info' />
          
          </div>

            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary" type="button" onClick={onClickHandler} disabled={submit} >Log In</button>
                <button className="btn btn-outline-secondary" type="button" onClick={onsignupHandler} >Sign Up</button>
            </div>






        </MDBCol>

      </MDBRow>

</Center>
    </MDBContainer>
  );
}

export default Loginform;