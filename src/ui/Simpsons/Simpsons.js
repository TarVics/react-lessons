import "./Simpsons.css";
import simpsons from './Simpsons.json';
import Character from "./Character";

function Simpsons () {
    return (
        <div className={'layout width-5 columns-2'}>
            {simpsons.map((info, key) => (<Character key={key} info={info}/>))}
        </div>
    );
}

export default Simpsons;