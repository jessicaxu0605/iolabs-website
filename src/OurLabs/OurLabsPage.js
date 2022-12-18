import React from 'react';
import {Advocacy, Education} from './LabsSections';
import HeaderBanner from '../components/HeaderBanner';
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
            </main>
        </React.Fragment>
    );
}

export default OurLabsPage;
