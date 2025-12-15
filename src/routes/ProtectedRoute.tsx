import React from 'react'
import { Redirect, Route } from 'react-router';

interface protectedRouteProps {
    component: React.ComponentType<any>;
    path:string;
    exact ?: boolean;
}

const ProtectedRoute: React.FC<protectedRouteProps> = ({component: Component,...rest}) => {
    const isAuth = !!localStorage.getItem("authToken")
  return (
    <Route 
    {...rest}
    render={(props)=>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
    />
  )
}

export default ProtectedRoute;
