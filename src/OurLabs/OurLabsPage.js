import {Advocacy, Education} from './LabsSections';

function OurLabsPage() {
    return(
        <main className='our-labs-page'>
            <div className='main-connector'/>
            <div className='bullet'/>
            <Advocacy/>
            <div className='bullet'/>
            <Education/>
        </main>
    );
}

export default OurLabsPage;