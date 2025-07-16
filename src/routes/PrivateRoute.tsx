/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }: any) => {

    const user = useSelector((state: any) => state.logInUser)
    const { pathname } = useLocation();

    if (!user?.user && !user?.accessToken) {
        return <Navigate to="/auth/login" state={{ path: pathname }}></Navigate>;
    }
    return children;
};


export default PrivateRoute;