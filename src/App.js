import {useState} from "react";

import './App.css';
import {NavBar, NavBarLink, SpaceXLaunches, Users} from "./components";

function App() {
    const [pageId, setPageId] = useState('1');
    return (
        <div className="App">
            <NavBar onSelect={id => setPageId(id)} selected={pageId}>
                <NavBarLink key={'1'}>User Information</NavBarLink>
                <NavBarLink key={'2'}>SpaceX Launches</NavBarLink>
            </NavBar>
            {pageId === '1' && <Users/>}
            {pageId === '2' && <SpaceXLaunches/>}
        </div>
    );
}

export default App;
