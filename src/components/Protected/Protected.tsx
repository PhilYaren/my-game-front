import React from 'react'
// import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// import { getUserSelector } from '../../redux/user.selector'

function Protected ({ isLogged, redirectTo = '/' }) {
  const user = true
  if (isLogged !== !!user) {
    return <Navigate to={redirectTo} replace />
  }

  return <Outlet />
}

export default Protected
