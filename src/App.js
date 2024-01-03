import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navcomp from './components/Navcomp';
import Albums from './pages/Albums';
import Posts from './pages/Posts';
import AlbumDetails from './pages/AlbumDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navcomp />
        <Routes>
          <Route path='/albums' element={<Albums />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/albumDetails/:id' element={<AlbumDetails />} />
          <Route path='*' element={<div className='text-center'>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
