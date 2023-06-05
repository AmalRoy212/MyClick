import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  const admin = localStorage.getItem('admin') ? localStorage.getItem('admin') : null;
  return admin ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default PrivateRoutes
