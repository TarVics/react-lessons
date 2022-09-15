function UserCard({caption, children}) {
    return (
        <div className="layout-card">
            <div className="layout-header">{caption}</div>
            <div className="layout-body">
                {children}
            </div>
        </div>
    );
}

export default UserCard;