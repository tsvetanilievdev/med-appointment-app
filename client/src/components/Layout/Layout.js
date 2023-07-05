import './Layout.css';
import Sidebar from './SideBar';

function Layout({ children }) {
    return (
        <div className="main">
            <Sidebar />
            <div className="content">
                <div className="content-header">Content Header</div>
                <div className="content-body">
                    Content body
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
