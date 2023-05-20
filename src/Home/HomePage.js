import React from 'react';
import {Link} from 'react-router-dom';
import HomePageLab from './HomePageLab';
    //props: Heading, Content, Position [left, center, right]
import Slideshow from './Slideshow';
import Button from '../components/Button'
    //props: Toggled, ClickedText(optional), Text, DefaultStyle (optional), ActivatedStyle (optional)
import './Home.css';

function HomePage() {
    return(
        <React.Fragment>
            <Slideshow/>
            <main className='home' style={{paddingBottom:'0'}}>
                <div className='main-connector'/>
                <div className='about-us'>                 
                    <h1 className='section-heading' style={{color: 'var(--io-blue)'}}>About Us</h1>
                    <div className='who-are-we'>
                        <div className='bullet'/>
                        <h2 style={{color: 'var(--io-blue)'}}>Who are we?</h2>
                        <p>
                            I/O LABS is a provincially incorporated, non-profit organization dedicated to helping youth access impactful STEM education and opportunities. 
                        </p>
                    </div>
                    <div className='what-we-do'>
                        <div className='bullet'/>
                        <h2 style={{color: 'var(--io-blue)'}}>What we do</h2>
                        <p>
                        We aim to foster STEM accessibility, proficiency, and engagement, providing youth with the support and opportunities they need to succeed. We ensure our programs are always free and focus on authentic engagement with underrepresented communities.
                        </p>
                    </div>
                    <div className='horizontal-connector'></div>
                    <div className='horizontal-connector spacing'></div>
                </div>

                <div className='connector' style={{left:'calc(4em)', margin:'0', backgroundColor:'var(--io-yellow)'}}></div>

                <section className='our-labs'>
                    <div className='connector' style={{left:'calc(var(--margin) + 4em)', margin:'0'}}></div>
                    <div className='main-style'>
                        <h1 className='section-heading' style={{color:'white'}}>Our Labs</h1>
                    </div>
                    <div className='connector' style={{left:'calc(var(--margin) + 4em)', margin:'0'}}></div>
                    <div className='labs'>
                        <HomePageLab 
                            Position='left'
                            Heading='Advocacy Lab'
                            Content='Implementing projects that increase STEM accessibility for youth, as well as improving the relevance and design of these programs and opportunities.'
                        />
                        <HomePageLab 
                            Position='center'
                            Heading='Education Lab'
                            Content='Providing youth with free robotics and computer programming education, through one-on-one mentorship and engaging learning opportunities.'
                        />
                        <HomePageLab 
                            Position ='center'
                            Heading='Events Lab'
                            Content='From summer camps, to hackathons, to workshops, we organize opportunities for hands-on engagement with STEM that aim to empower and inspire!'
                        />
                        <HomePageLab 
                            Position='right'
                            Heading='Opportunities Lab'
                            Content='I/O Labs is run by youth for youth. Interested in joining our team? We provide leadership and volunteer opportunities for students looking to make an impact!'
                        />
                    </div>
                    <Link to='/labs' className='button-link' style={{textDecoration:'none'}}>
                        <Button
                            Toggled={()=>null}
                            Text='Learn More >'
                            DefaultStyle={{color:'white', borderColor:'white'}}
                            ActivatedStyle={{
                                color:'var(--io-red)',
                                borderColor:'white',
                                backgroundColor:'white',
                            }}
                        />
                    </Link>
                </section>
            </main>
        </React.Fragment>
    );
}

export default HomePage;
//LabsTemplate props: Classes, Heading, DefaultContent, ExpandedContent, Dropdown
