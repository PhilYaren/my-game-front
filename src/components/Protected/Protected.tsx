import React from 'react';
// import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/user/user.selector';
// import { getUserSelector } from '../../redux/user.selector'

function Protected({ isLogged, redirectTo = '/' }) {
  const user = useSelector(getUser);
  if (isLogged !== !!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}

export default Protected;
