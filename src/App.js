import './App.css';
import React, {useState} from "react";
import { NavBar, NavBarLink } from "./ui/NavBar";

function App() {
  const [pageId, setPageId] = useState('1')
  return (
    <div className="App">
      <NavBar onSelect={id => setPageId(id)} selected={pageId}>
        <NavBarLink key={'1'}>Link 1</NavBarLink>
        <NavBarLink key={'2'}>Link 2</NavBarLink>
        <NavBarLink key={'3'}>Link 3</NavBarLink>
      </NavBar>
        <h1>{pageId}</h1>
    </div>
  );
}

export default App;
