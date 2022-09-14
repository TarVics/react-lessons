import Status from './Status';
import Section from './Section';
import ImgWrapper from './ImgWrapper';
import SectionInfo from "./SectionInfo";

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
                    <SectionInfo caption={'Species'} info={species}/>
                </Section>
                <Section>
                    <SectionInfo caption={'Gender'} info={gender}/>
                </Section>
                <Section>
                    #ID: {id}
                </Section>
            </div>
        </div>
    );
}

export default Character;