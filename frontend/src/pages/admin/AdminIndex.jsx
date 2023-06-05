import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function AdminIndex() {
  return (
    <div>
      <Container className='my-2'>
        <Outlet />
      </Container>
    </div>
  )
}

export default AdminIndex;