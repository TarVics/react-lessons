import LeftImage from "./LeftImage";

function Character (props) {
    const { name, surname, age, info, photo } = props.info;
    return (
        <div className={'character'}>
            <LeftImage src={photo} alt={name + ' ' + surname} />
            <div className={'character-right'}>
                <h2 className={'character-name'}>{name} {surname}</h2>
                <h3 className={'character-age'}>({age} years old)</h3>
                <p className={'character-info'}>{info}</p>
            </div>
        </div>
    );
}

export default Character;
