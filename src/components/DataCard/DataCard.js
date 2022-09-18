function DataCard({header, children}) {
    return (
        <div className="layout-card">
            <div className="layout-header">{header || '\u00A0'}</div>
            <div className="layout-body">
                {children}
            </div>
        </div>
    );
}

export { DataCard }