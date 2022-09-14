import "./Simpsons.css";
import simpsons from './Simpsons.json';
import Character from "./Character";

function Simpsons() {
    return (
        <>
            <h1 style={{'text-align': 'center'}}>Simpsons</h1>
            <div className={'Simpsons'}>
                {simpsons.map((info, key) => (<Character key={key} info={info}/>))}
            </div>
        </>
    );
}

export default Simpsons;