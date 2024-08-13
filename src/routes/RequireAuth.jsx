import { useAuth } from '../hooks/useAuth.jsx';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


export const RequiredAuth = ({ allowedRoles }) => {

    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles.includes(role))
            ? <Outlet />
            : auth?.user
                ?
                <Navigate to={"/login"} state={{ from: location }} replace />
                :
                <Navigate to={"/login"} state={{ from: location }} replace />

    );
};