function User(props) {
    const {id, name, status, species, gender, image} = props.info;

    return (
        <div className={'layout-card'}>
            <div className={'layout-header'}>{name}</div>
            <div className={'layout-body'}>
                <div className={'layout-row'}>
                    <div className={'layout-caption'}>id</div>
                    <div className={'layout-value'}>{id}</div>
                </div>
                <div className={'layout-row'}>
                    <div className={'layout-caption'}>name</div>
                    <div className={'layout-value'}>{name}</div>
                </div>
                <div className={'layout-row'}>
                    <div className={'layout-caption'}>status</div>
                    <div className={'layout-value'}>{status}</div>
                </div>
                <div className={'layout-row'}>
                    <div className={'layout-caption'}>species</div>
                    <div className={'layout-value'}>{species}</div>
                </div>
                <div className={'layout-row'}>
                    <div className={'layout-caption'}>gender</div>
                    <div className={'layout-value'}>{gender}</div>
                </div>
                <div className={'layout-row image'}><img src={image} alt={'Photo of ' + name}/></div>
            </div>
        </div>
    );
}

export default User;