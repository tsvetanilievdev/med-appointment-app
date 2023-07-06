import { useState } from 'react';
import Content from './Content';
import './Layout.css';
import Sidebar from './SideBar';

function Layout({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="main">
            <Sidebar collapsed={collapsed} />
            <Content
                collapsed={collapsed}
                toggleCollapsed={() => setCollapsed(!collapsed)}
                children={children}
            />
        </div>
    );
}

export default Layout;
