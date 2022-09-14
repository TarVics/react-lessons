function SectionInfo(props) {
    return (
        <>
            <span className={'text-gray'}>{props.caption}:</span>
            {props.info}
        </>
    );
}

export default SectionInfo;