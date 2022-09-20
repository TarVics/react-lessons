import {useState} from "react";

import './App.css';
import {Users, Posts} from "./components";

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="App layout width-6 columns-2">
            <Users selected={user} onSelect={setUser}/>
            <Posts selected={user} key={user && user.id}/>
        </div>
    );
}

export default App;
