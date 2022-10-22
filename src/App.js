import {Routes, Route} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar';
//commenynhgfgjy

function App() {
  return (
    <div>
    <header>
      <Navbar/>
    </header>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/team' element={<h1>Our Team</h1>}/>
    </Routes>
    </div>
  );
}

export default App;
