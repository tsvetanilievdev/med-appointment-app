function Content({ children, toggleCollapsed, collapsed }) {
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
                div.
            </div>
            <div className="content-body">
                Content body
                {children}
            </div>
        </div>
    );
}

export default Content;
