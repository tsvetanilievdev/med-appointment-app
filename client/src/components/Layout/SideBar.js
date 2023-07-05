import { Link, useLocation } from 'react-router-dom';
function Sidebar(props) {
    const location = useLocation();
    const userMenuList = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-line',
        },
        {
            name: 'Calendar',
            path: '/calendar',
            icon: 'ri-calendar-event-line',
        },
        {
            name: 'Appointments',
            path: '/appointments',
            icon: 'ri-file-list-line',
        },
        {
            name: 'Logout',
            path: '/logout',
            icon: 'ri-logout-box-line',
        },
    ];
    return (
        <div className="sidebar">
            <h3>MENU</h3>
            {userMenuList.map((item) => {
                const activeLink = location.pathname === item.path;
                return (
                    <div
                        className={`menu-item ${
                            activeLink ? 'active-menu-item' : ''
                        }`}
                    >
                        <i className={item.icon}></i>
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Sidebar;
