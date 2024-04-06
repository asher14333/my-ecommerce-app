import React from 'react';
import { Navigate } from 'react-router-dom';
import { Authentication } from './Authenticator';

const AuthenticationChecker = ({ children }) => {
  const { isAuthenticated } = Authentication();

  return isAuthenticated ? children : <Navigate to="/LoginPage" />;
};

export default AuthenticationChecker;