import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
    if (localStorage.getItem('token')) {
        return props.children;
    }
    return <Navigate to="/login" />;
}

export default ProtectedRoute;
