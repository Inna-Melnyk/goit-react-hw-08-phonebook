import { useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from "redux/auth/authSelectors"


export const PrivateRoute = ({ component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    
    return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}