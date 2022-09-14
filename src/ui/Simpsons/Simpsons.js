import simpsons from './simpsons.json';
import Character from "./Character";

function Simpsons() {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Simpsons</h1>
            <div className={'Simpsons'}>
                {simpsons.map((info, key) => (<Character key={key} info={info}/>))}
            </div>
        </>
    )
}

export default Simpsons;