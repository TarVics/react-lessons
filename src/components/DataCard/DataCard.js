function DataCard({header, children}) {
    return (
        <div className="layout-card">
            <div className="layout-header">
                <div className="layout-value">{header || '\u00A0'}</div>
            </div>
            <div className="layout-body">
                {children}
            </div>
        </div>
    );
}

export { DataCard }