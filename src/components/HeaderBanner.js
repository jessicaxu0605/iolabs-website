function HeaderBanner(props){

    const bannerStyle={
        position: 'relative',
        width: '100vw',
        height: '280px',
        margin: '0',
        overflow: 'hidden',
        objectFit: 'cover',
        boxShadow: 'var(--standard-shadow)',
    }

    const h1Style={
        fontSize: '6rem',
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 'var(--margin)',
        whiteSpace: 'nowrap',
        position: 'absolute'
    }

    return(
        <div className='our-labs banner' style={bannerStyle}>
            <img src={props.ImageSrc} style={{position:'absolute'}}/>
            <h1 style={h1Style}>
                {props.Text}
            </h1>
        </div>
    );
}

export default HeaderBanner;