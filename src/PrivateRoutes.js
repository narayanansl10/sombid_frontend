import { Navigate, Outlet } from 'react-router-dom'
import Cookies from "universal-cookie";
const cookies = new Cookies();
const PrivateRoutes = () => {
    const token = cookies.get("TOKEN");
    return (
        token ? <Outlet /> : <Navigate to='/auth' />
    )
}

export default PrivateRoutes;