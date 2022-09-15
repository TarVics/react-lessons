import './App.css';
import React from "react";
import { NavBar, NavBarLink } from "./ui/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar onSelect={console.log}>
        <NavBarLink key={'1'}>Link 1</NavBarLink>
        <NavBarLink key={'2'} selected={"1"}>Link 2</NavBarLink>
        <NavBarLink key={'3'}>Link 3</NavBarLink>
      </NavBar>
    </div>
  );
}

export default App;
