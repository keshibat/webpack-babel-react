import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../stores/auth';

function PrivateRoute({ component }) {
  console.log(auth.isAuthenticated);
  return (
    <Route
      component={
        auth.isAuthenticated
          ? component
          : ({ location }) => (
              <Redirect to={{ pathname: '/signin', state: { from: location.pathname } }} />
            )
      }
    />
  );
}

export default PrivateRoute;
