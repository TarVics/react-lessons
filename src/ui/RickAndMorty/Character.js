import Status from './Status';
import Section from './Section';
import ImgWrapper from './ImgWrapper';

function Character(props) {
    const {id, name, status, species, gender, image} = props.info;

    return (
        <div className={'Character'}>
            <ImgWrapper src={image} alt={name}/>
            <div className={'ContentWrapper'}>
                <Section>
                    <h2>{name}</h2>
                    <Status value={status}/>
                </Section>
                <Section>
                    <span className={'text-gray'}>Species:</span>
                    {species}
                </Section>
                <Section>
                    <span className={'text-gray'}>Gender:</span>
                    {gender}
                </Section>
                <Section>
                    #ID: {id}
                </Section>
            </div>
        </div>
    );
}

export default Character;