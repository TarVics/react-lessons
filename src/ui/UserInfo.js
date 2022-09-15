function UserInfo({ user, selected, onActivate }) {
    return (
        <div className={'layout-row layout-value' + (selected ? ' layout-selected' : '')  } >
            {user.name}
            <button className="layout-button" onClick={() => onActivate(user)}>posts</button>
        </div>
    );
}

export default UserInfo;