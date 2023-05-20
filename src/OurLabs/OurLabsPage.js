import React from 'react';
import {Advocacy, Education, Events, Opportunities} from './LabsSections';
import HeaderBanner from '../components/HeaderBanner';
    //props: ImageSrc, Text
import HeaderBackground from '../assets/our-labs-banner.png';

function OurLabsPage() {
    return(
        <React.Fragment>
            <HeaderBanner
                    ImageSrc = {HeaderBackground}
                    Text = 'Our Labs'
            />
            <main className='our-labs-page'>
                <div className='main-connector'/>
                <section>
                    <div className='bullet'/>
                    <Advocacy/>
                </section>
                <section>
                    <div className='bullet'/>
                    <Education/>
                </section>
                <section>
                    <div className='bullet'/>
                    <Events/>
                </section>
                <section>
                    <div className='bullet'/>
                    <Opportunities/>
                </section>
            </main>
        </React.Fragment>
    );
}

export default OurLabsPage;
