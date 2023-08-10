import { useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const RequireAuth = () =>{
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth?.user 
        ? <Outlet />
        : <Navigate to="login" state={{ from: location}} replace/>
        //remember not to remove state ^    and          replace
        //they make the "Alt + Right Arrow" keybind work
    );
}

export default RequireAuth;