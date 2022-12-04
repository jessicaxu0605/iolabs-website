import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <header>
            <nav className='navbar'>
                <Link to='/' className='home-link'>
                    <img src={require('../assets/ioLogo-nav.png')} alt='Home' className='home-link-img'/>
                </Link>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <Link to='/team' className='nav-link'>Our Team</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events' className='nav-link'>Events</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/labs' className='nav-link'>Our Labs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;