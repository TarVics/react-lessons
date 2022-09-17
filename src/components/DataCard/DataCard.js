function DataCard({header, children}) {
    return (
        <div className="layout-card">
            <div className="layout-header">{header}</div>
            <div className="layout-body">
                {children}
            </div>
        </div>
    );
}

export { DataCard }