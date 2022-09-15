function UserRow({header, caption, children}) {
    return (
        <>
            {header && <div className="layout-header">{header}</div>}
            <div className="layout-row">
                <div className="layout-caption">{caption}</div>
                <div className="layout-value">{children}</div>
            </div>
        </>
    )
}

export default UserRow;