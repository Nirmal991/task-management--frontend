import React from 'react'
import { Redirect, Route } from 'react-router';


interface publicRouteProps {
    component: React.ComponentType<any>;
    path: string;
    exact?: boolean
}
const PublicRoute: React.FC<publicRouteProps> = ({component: Component, ...rest}) => {

    const isAuth = !!localStorage.getItem("authToken")
  return (
    <Route
    {...rest}
    render={(props) => 
        !isAuth ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
    />
  )
}

export default PublicRoute
