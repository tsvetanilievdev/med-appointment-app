import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import BootstrapLoader from './components/BootstrapLoader';
import { useSelector } from 'react-redux';
function App() {
    const { loading } = useSelector((state) => state.alerts);
    return (
        <BrowserRouter>
            {loading && <BootstrapLoader />}
            <Toaster position="top-center" reverseOrder={false} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
