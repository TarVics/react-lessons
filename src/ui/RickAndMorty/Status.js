function Status(props) {
    const {value: status} = props;
    const statusClass = status === 'Alive' ? 'status__icon__green' :
        status === 'Dead' ? 'status__icon__red' : 'status__icon__gray';
    return (
        <span className={'status'}>
            <span className={statusClass}></span>{status}
        </span>
    );
}

export default Status;