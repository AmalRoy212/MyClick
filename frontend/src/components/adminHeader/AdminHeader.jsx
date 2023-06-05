import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../../redux-toolkit/adminAuthSlice';
import axios from '../../config/axios';
import { useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';



function AdminHeader() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { admin } = useSelector((state) => state.admin);

  const admin = localStorage.getItem('admin') ? localStorage.getItem('admin') : null;

  const logOutHandler = async () => {
    console.log('here',admin)
    axios.put('/admin/logout',null,{
      headers : {
        'Authorization': `Bearer ${admin}`
      }
    }).then(() =>{
      dispatch(logout())
      navigate('/admin/login');
    }).catch((err)=>console.log(err.message));

  }
  return (
    <div>
      <>
        <Navbar style={{marginTop:"1rem"}} bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Admin</Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to={'/admin/home'}>
                <Nav.Link >Users</Nav.Link>
              </LinkContainer>

              <LinkContainer to={'/admin/create/user'}>
                <Nav.Link>Create User</Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to={'/admin/update/user'}>
                <Nav.Link>Update User</Nav.Link>
              </LinkContainer> */}
            </Nav>
          <Button onClick={() => logOutHandler()} style={{color:'white'}}>Log Out</Button>
          </Container>
        </Navbar>
        <br />
      </>
    </div>
  )
}

export default AdminHeader
