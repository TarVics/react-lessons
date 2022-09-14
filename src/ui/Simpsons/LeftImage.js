function LeftImage(props) {
    return (
        <div className={'character-left'}>
            <img className={'character-photo'} src={props.src} alt={props.alt}/>
        </div>
    )
}

export default LeftImage;