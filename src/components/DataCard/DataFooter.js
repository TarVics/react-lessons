import css from './DataCard.module.css';

function DataFooter({ children }) {

    return (
        <div className={ css['layout-footer'] }>
            <div className={ css[ 'layout-button' ] }>
                { children }
            </div>
        </div>
    )
}

export { DataFooter }