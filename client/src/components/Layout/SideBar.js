import { Link, useLocation } from 'react-router-dom';
function Sidebar({ collapsed }) {
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
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="menu">
                <h3>MENU</h3>
                {userMenuList.map((item, i) => {
                    const activeLink = location.pathname === item.path;
                    return (
                        <div
                            key={i}
                            className={`menu-item ${
                                activeLink ? 'active-menu-item' : ''
                            }`}
                        >
                            <Link to={item.path}>
                                <i className={item.icon}></i>{' '}
                                {collapsed ? ' ' : item.name}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
