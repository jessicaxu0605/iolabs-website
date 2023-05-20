function HeaderBanner(props){

    return(
        <div className='banner'>
            <img src={props.ImageSrc} style={{position:'absolute'}}/>
            <h1>
                {props.Text}
            </h1>
        </div>
    );
}

export default HeaderBanner;
//props: ImageSrc, Text