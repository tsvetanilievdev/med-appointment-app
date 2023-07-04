import { useEffect } from 'react';
import requester from '../services/requester';
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

export default Home;
