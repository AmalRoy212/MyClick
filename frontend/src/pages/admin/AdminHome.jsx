import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AdminHeader from '../../components/adminHeader/AdminHeader';
import axios from '../../config/axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MDBCol } from "mdbreact";
import Loading from '../../components/loding/Loding'


function AdminHome() {

  const [users, setUsers] = useState([]);
  const [loading,setLoaing] = useState(true);

  const adminToken = localStorage.getItem('admin') ? localStorage.getItem('admin') : null

  const navigate = useNavigate();

  const [searchData, setSearchData] = useState('');

  const searchDataHandler = async () => {
    axios.get(`/admin/users/${searchData}`, {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      },
    })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }

  useEffect(() => {
    setLoaing(true);
    if (searchData === '') {
      axios.get('/admin/get/users', {
        headers: {
          'Authorization': `Bearer ${adminToken}`
        }
      })
        .then((res) => {
          setUsers(res.data);
          setLoaing(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } else {
      axios.get(`/admin/users/${searchData}`, {
        headers: {
          'Authorization': `Bearer ${adminToken}`
        },
      })
        .then((res) => {
          setUsers(res.data);
          setLoaing(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [users, adminToken,searchData]);

  const blockUser = (id) => {
    setLoaing(true);
    axios.put('/admin/block/user', {
      userId: id
    }, {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    }).then((res) => {
      setLoaing(false);
    }).catch((err) => console.log(err.message))
  }

  const unblockUser = (userId) => {
    setLoaing(true);
    axios.put('/admin/unblock/user', {
      userId
    }, {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    }).then((res) => {
      setUsers(false);
    }).catch((err) => console.log(err.message))
  }

  const deleteUser = (userId) => {
    setLoaing(true);
    axios.delete('/admin/users/delete', {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      },
      data: {
        userId
      }
    })
      .then((res) => {
        setLoaing(false);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const editUser = (userId) => {
    setLoaing(true);
    localStorage.setItem('userId', userId);
    navigate('/admin/update/user');
    setLoaing(false);
  }

  return (
    <div>
      {/* {loading && <Loading />} */}
      <AdminHeader />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MDBCol md="6">
          <div className="input-group md-form form-sm form-1 pl-0">
            <input
              style={{ margin: '1rem' }}
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />

          </div>
        </MDBCol>
        <Button onClick={searchDataHandler} style={{ margin: '1rem' }} variant='primary' className='mt-3'>
          Search
        </Button>
      </div>
      <MDBTable style={{ backgroundColor: '#D3D3D3 ' }} bordered>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Image</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Block</th>
            <th scope='col'>UnBlock</th>
            <th scope='col'>Delete</th>
            <th scope='col'>Edit</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((user, index) => (

            <React.Fragment key={index}>
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user && <img alt='' style={{ objectFit: 'cover', border: '2px solid black', borderRadius: '50%' }} width="50px" height="50px" src={user.imgSrc ? `/images/${user.imgSrc}` : null}></img>}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant='success' value={user._id}
                    onClick={(e) => unblockUser(e.target.value)}
                  >UnBlock</Button>
                </td>
                <td>
                  <Button variant='warning' value={user._id}
                    onClick={(e) => blockUser(e.target.value)}
                  >Block</Button>
                </td>
                <td>
                  <Button variant='danger' value={user._id}
                    onClick={(e) => deleteUser(e.target.value)}
                  >Delete</Button>
                </td>
                <td>
                  <Button variant='danger' value={user._id}
                    onClick={(e) => editUser(e.target.value)}
                  >Edit</Button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default AdminHome;