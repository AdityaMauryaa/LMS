import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({ allowedRoles }) {
    const { isLoggedIn, role } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles.includes(role)) {
        return <Outlet />;
    }

    return <Navigate to="/denied" replace />;
}

export default RequireAuth;
