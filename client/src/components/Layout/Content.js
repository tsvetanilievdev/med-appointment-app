import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Content({ children, toggleCollapsed, collapsed }) {
    const { user } = useSelector((state) => state.user);
    return (
        <div className="content">
            <div className="content-header">
                {collapsed ? (
                    <i
                        className="ri-close-line action-header-icon"
                        onClick={toggleCollapsed}
                    ></i>
                ) : (
                    <i
                        className="ri-menu-line action-header-icon"
                        onClick={toggleCollapsed}
                    ></i>
                )}
                <div className="content-header-user">
                    <i className="ri-notification-3-line action-header-icon"></i>
                    <Link to="/profile">{user?.name}</Link>
                </div>
            </div>
            <div className="content-body">
                Content body
                {children}
            </div>
        </div>
    );
}

export default Content;
