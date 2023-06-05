import React,{useState} from 'react'
import './Header.css';
import { FaSlideshare, FaMailchimp, FaYelp, FaDragon, FaSpider } from 'react-icons/fa';
import {  Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../config/axios';
import { logout } from '../../redux-toolkit/authSlice';
import Loading from '../loding/Loding';
import { useNavigate } from "react-router-dom";

function Header() {

  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  let { token } = useSelector((state) => state.auth);

  const logOutHandler = () => {
    setLoading(true)
    axios.put('/users/logout',null,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      dispatch(logout());
      navigate('/login');
      setLoading(false);
    }).catch((error) => console.log(error.message));
  }
  
  return (
    <div>
      {loading && <Loading />}
      <div className='holder'>
        <div className='inner'>
          <img className='logo' src="https://i.graphicmama.com/blog/wp-content/uploads/2019/10/08140842/Best-Photography-Logo-Ideas-Example-Carrie-Chase-Photography-Logo.jpg" alt="" />
          { token ?
            <div style={{marginLeft:'70%'}}>
              <div className='left_side'>
              <LinkContainer to={'/profile'}>
                  <Nav.Link><FaDragon /> Profile</Nav.Link>
                </LinkContainer>
                <Nav.Link style={{marginLeft:'1rem'}} onClick={logOutHandler}><FaSpider /> Log Out</Nav.Link>
              </div>
            </div>
            :
            (
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'65%'}}>
                <LinkContainer style={{marginLeft:'2rem'}} to={'/login'}>
                  <Nav.Link><FaSlideshare /> Sign In</Nav.Link>
                </LinkContainer>
                <LinkContainer style={{marginLeft:'1rem'}} to={'/signup'}>
                  <Nav.Link><FaYelp /> Sign Up</Nav.Link>
                </LinkContainer>
                <LinkContainer style={{marginLeft:'1rem'}} to={'/admin/Login'}>
                  <Nav.Link><FaMailchimp /> Admin</Nav.Link>
                </LinkContainer>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header
