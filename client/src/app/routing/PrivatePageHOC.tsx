/* eslint-disable no-unused-vars */
import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { cookies, routes } from 'shared/helpers'

export const PrivatePageHOC: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const token = cookies.getToken()
  if (!token) {
    return <Navigate to={routes.auth} />
  }
  return children
}
