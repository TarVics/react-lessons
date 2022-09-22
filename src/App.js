import './App.css';
import {Cars} from "./components/Cars";
import {DataLayout} from "./components/DataCard";

function App() {
  return (
    <DataLayout className="App" width="1" columns="1">
        <Cars/>
    </DataLayout>
  )
}

export default App;
