import './App.css';
import {Cars} from "./components";
import {DataLayout} from "./components";

function App() {
  return (
    <DataLayout className="App" width="1" columns="1">
        <Cars/>
    </DataLayout>
  )
}

export default App;
