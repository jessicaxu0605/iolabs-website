import './HeaderBanner.css';

function HeaderBanner(props){

    return(
        <div className='banner'>
            <img src={props.ImageSrc}/>
            <h1>
                {props.Text}
            </h1>
        </div>
    );
}

export default HeaderBanner;
//props: ImageSrc, Text

