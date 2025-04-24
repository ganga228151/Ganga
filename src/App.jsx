import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from './Component/GalleryPage';
import View360Page from './Component/View360Page';
import AirPano360Page from './Component/AirPano360PagePage';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={< AirPano360Page/>} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/video" element={<GalleryPage />} />
        <Route path="/view/:imageId" element={<View360Page />} />
    

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;