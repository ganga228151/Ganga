import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from './Component/GalleryPage';
import View360Page from './Component/View360Page';
import Homepage from './Component/Homepage';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';


function App() {
  return (

    <Router>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={< Homepage/>} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/video" element={<GalleryPage />} />
        <Route path="/view/:imageId" element={<View360Page />} />
    

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;