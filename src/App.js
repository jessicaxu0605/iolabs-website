import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Home/HomePage';
import OurTeamPage from './OurTeam/OurTeamPage';
import EventsPage from './Events/EventsPage';
import OurLabsPage from './OurLabs/OurLabsPage';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
    <header>
      <Navbar/>
      <div className='spacer'/>
    </header>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/team' element={<OurTeamPage/>}/>
      <Route path='/events' element={<EventsPage/>}/>
      <Route path='/labs' element={<OurLabsPage/>}/>
    </Routes>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
