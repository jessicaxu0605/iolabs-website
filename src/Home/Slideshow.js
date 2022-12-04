import { findByLabelText } from '@testing-library/react';
import {useEffect, useState, useRef} from 'react';
import './Slideshow.css';


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

    const slideState = (index)=> {
        if (index===slide) {
            return ('current-slide');
        } else if (index===exitSlide) {
            return('exit-slide');
        } else {
            return('hidden-slide');
        }
    }

    return(
        <div className='slideshow-container'>
            <div className='slideshow-controls'>
                {slides.map((_, index) => (
                    <SlideshowToggle key={index} Slide={index} ActiveSlide={slide} Toggled={()=>{setExitSlide(slide); setSlide(index)}}/>
                ))}
            </div>
            <div className='slides'>
                {slides.map((_, index) => <div key={index} className={slideState(index)}>{slides[index]}</div>)}

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
    const contentStyle = {
        position: 'absolute',
        padding: '4em',
        top: '5em',
        color: 'white',
        width: '30em',
    };
    
    const headingStyle = {
        fontSize: '4em',
        lineHeight: '0.5em',

    };

    const backingStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: '100%',
        width: '70em',
        position: 'relative',
        left: '-30em',
        transform: 'skew(-18deg)',
    };

    return(
    <div className='slide'>
        <img src={require('../assets/slideshow1.jpg')} className='background' alt='first slide' 
            style={{objectPosition: '50% 10%'}}/>
        <div className='foreground'>
            <div style={backingStyle}></div>
            <div style={contentStyle}>
                <h1 style={headingStyle}>Inspiring</h1>
                <h1 style={headingStyle}>Innovation</h1>
                <p>To succeed in this new information-based and highly technological society, students need to develop their capabilities in STEM to levels much beyond what was considered acceptable in the past</p>
            </div>
        </div>
    </div>    );
}

function Slide2() {
    return(
    <div className='slide'>
        <img src={require('../assets/slideshow2.jpg')} className='background' alt='second slide'
            style={{objectPosition: '50% 65%'}}
        />
    </div>
    );
}

function Slide3() {
    return(
        <div className='slide'>
            <img src={require('../assets/slideshow3.jpg')} className='background' alt='second slide'
                style={{objectPosition: '50% 40%'}}
            />
        </div>
        );
}

function Slide4() {
    return(
        <div className='slide'>
            <img src={require('../assets/slideshow4.jpg')} className='background' alt='second slide'
                style={{objectPosition: '50% 65%'}}
            />
        </div>
        );
}

function Slide5() {
    return(
        <div className='slide'>
            <img src={require('../assets/slideshow5.jpg')} className='background' alt='second slide'
                style={{objectPosition: '50% 60%'}}
            />
        </div>
        );
}


export default Slideshow;