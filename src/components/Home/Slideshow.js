import {useEffect, useState, useRef} from 'react';
//NOTE: change slides implementation to load all slides at all times --> hide unused slides
//DO NOT re-render on every transition


function Slideshow() {
    const slides = [
        <Slide1/>,
        <Slide2/>,
        <Slide3/>,
        <Slide4/>,
        <Slide5/>
    ];
    let numSlides = slides.length;


    const [slide, setSlide] = useState(0);
    const [exitSlide, setExitSlide] = useState(null);
    
    let timer = useRef(null);

    useEffect(()=>{
        if(timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(()=>{
            setExitSlide(slide);
            setSlide((slide+1)%numSlides);
        },10000);
        return() => clearTimeout(timer.current);
    }, [slide, exitSlide]);

    return(
        <div className='slideshow-container'>
            <div className='slideshow-controls'>
                {slides.map((_, index) => (
                    <SlideshowToggle key={index} Slide={index} ActiveSlide={slide} Toggled={()=>{setExitSlide(slide); setSlide(index)}}/>
                ))}
            </div>
            <div className='slides'>
                <div className='exit-slide'>{slides[exitSlide]}</div>
                <div key={slide} className='current-slide'>{slides[slide]}</div>
            </div>

        </div>
    );
}

function SlideshowToggle(props) {
    return(
        <span className= {props.Slide===props.ActiveSlide ? 'slideshow-toggle active' : 'slideshow-toggle'} onClick={()=>props.Toggled()}></span>
    );
}

function Slide1() {
    return(<img src={require('../../assets/slideshow1.jpg')} className='slide' alt='first slide'/>);
}

function Slide2() {
    return(<img src={require('../../assets/slideshow2.jpg')} className='slide' alt='second slide'/>);
}

function Slide3() {
    return(<img src={require('../../assets/slideshow3.jpg')} className='slide' alt='third slide'/>);
}

function Slide4() {
    return(<img src={require('../../assets/slideshow4.jpg')} className='slide' alt='fourth slide'/>);
}

function Slide5() {
    return(<img src={require('../../assets/slideshow5.jpg')} className='slide' alt='fifth slide'/>);
}


export default Slideshow;