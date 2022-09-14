function ImgWrapper(props) {
    const {src, alt} = props;
    return (
        <div className={'ImgWrapper'}>
            <img src={src} alt={alt}/>
        </div>
    );
}

export default ImgWrapper;