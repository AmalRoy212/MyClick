import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { MDBCol, MDBContainer, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import axios from '../config/axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux-toolkit/authSlice'
import Header from '../components/Navbar/Header';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if(token){
      navigate('/home');
    }
  },[token,navigate])

  const submitHandler = async function (e) {
    e.preventDefault();
    try {
      axios.post('/users/login',{
        email,
        password
      }).then((res)=>{
        localStorage.setItem('token',res.data.token);
        dispatch(login(res.data.token));
        navigate('/home');
      })
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header className='p-0' />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="6">
            <MDBCard className='p-5' style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',marginTop:'5rem',borderRadius:'10px',background:'#DDDDDE'}}>
              <h1>Log In</h1>
              <Form onSubmit={submitHandler}>

                <Form.Group className='my-2' controlId='email'>
                  <Form.Label style={{float:'left'}}>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Please enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                  <Form.Label style={{float:'left'}}>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Please enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                  Log In
                </Button>

                <Row className='py-3'>
                  <Col>
                    New to me? <Link to={'/signup'}>Register</Link>
                  </Col>
                </Row>
              </Form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Login;
