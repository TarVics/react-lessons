import {useState} from "react";

import './App.css';
import {NavBar, NavBarLink, SpaceXLaunches, Users} from "./components";

function App() {
    const [pageId, setPageId] = useState('1');
    const [user, setUser] = useState({});

    return (
        <div className="App">
            <NavBar selected={pageId} onSelect={setPageId}>
                <NavBarLink key={'1'}>User Information</NavBarLink>
                <NavBarLink key={'2'}>SpaceX Launches</NavBarLink>
            </NavBar>
            {pageId === '1' && <Users selected={user} onSelect={setUser}/>}
            {pageId === '2' && <SpaceXLaunches/>}
        </div>
    );
}

export default App;
