import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import requester from '../services/requester';
import { hideLoading, showLoading } from '../redux/alertsSlice';
import { setUser } from '../redux/userSlice';

function ProtectedRoute(props) {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const getData = async () => {
        try {
            dispatch(showLoading());
            const response = await requester.protect(
                '/api/user/get-user-info-by-id',
                token
            );
            const data = await response.json();
            if (data.success) {
                dispatch(hideLoading());
                dispatch(setUser(data.user));
            } else {
                navigate('/login');
            }
        } catch (error) {
            dispatch(hideLoading());
            navigate('/login');
        }
    };

    useEffect(() => {
        if (!user) {
            getData();
        }
    }, [user]);

    if (token) {
        return props.children;
    }
    return <Navigate to="/login" />;
}

export default ProtectedRoute;
