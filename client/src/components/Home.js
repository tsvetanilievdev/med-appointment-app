import { useEffect } from 'react';
import requester from '../services/requester';
import ProtectedRoute from './ProtectedRoute';
function Home() {
    const getData = async () => {
        try {
            const response = await requester.protect(
                '/api/user/get-user-info-by-id',
                localStorage.getItem('token')
            );
            const jsonData = await response.json();
            console.log('Home jsonData');
            console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
}

function ProtectedHome(props) {
    return (
        <ProtectedRoute>
            <Home props={props} />
        </ProtectedRoute>
    );
}
export default ProtectedHome;
