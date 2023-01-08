import PersonCard from './PersonCard';
//props: Class Name, Position, Image, Bio, Website, LinkedIn, Instagam, Twitter, Facebook, Github
import React from 'react';
import './OurTeam.css';

function OurTeamPage() {
    return(
        <React.Fragment>
            <div className='main-connector'/>
            <main>
                <h1 className='page-title'>Meet Our Team!</h1>
                <PersonCard
                    Class='testing'
                    Name='Testing Testing'
                    Position='test subject'
                    Bio='Lorem ipsum dolor sit amet, vitae commodo massa venenatis. Nunc tincidunt viverra erat eget blandit. Maecenas facilisis diam et libero rutrum tincidunt. Donec bibendum odio quis sem mollis, et tincidunt tellus cursus. Donec nec vehicula nunc, in tristique dolor.'
                    Website='https://feathericons.com/'
                    Instagram='https://imagekit.io/blog/lazy-loading-images-complete-guide/'
                    Github='https://github.com/jessicaxu0605/iolabs-website/tree/main/src/components/Home'
                />
                <PersonCard
                    Name='Second Test'
                    Position='How does this fit?'
                    Bio='sfsdfksdjfksdjfksdjfisejflskejfsdklfjsdlfie'
                    Website='blank'
                />
            </main>
        </React.Fragment>
    );
}

export default OurTeamPage;
