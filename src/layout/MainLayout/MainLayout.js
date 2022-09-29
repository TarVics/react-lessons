import {NavLink, Outlet, useNavigate} from "react-router-dom";

function MainLayout() {
    const navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li><NavLink to={'home'} >Home</NavLink></li>
                <li><NavLink to={'logout'} >Logout</NavLink></li>
                <li><NavLink to={'private'} >Private</NavLink></li>
            </ul>
            <button onClick={()=>navigate(-1)}>Prev</button>
            <button onClick={()=>navigate(1)}>Next</button>
            <Outlet/>
        </nav>
    );
}

export {MainLayout}