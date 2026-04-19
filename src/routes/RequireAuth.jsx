import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  // While auth is checking session, defer rendering
  if (loading) {
    return null
  }

  if (!user) {
    const returnTo = location.pathname + location.search
    return (
      <Navigate
        to="/login"
        replace
        state={{ returnTo }}
      />
    )
  }

  // Support both wrapper usage and as a Route element with Outlet
  return children ? children : <Outlet />
}

export default RequireAuth
