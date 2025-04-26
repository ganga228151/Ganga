import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GalleryPage from './Component/GalleryPage';
import GalleryPage2 from './Component/GalleryPage2';
import View360Page from './Component/View360Page';
import Videopage from './Component/Videopage';
import Homepage from './Component/Homepage';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { SearchContext } from './context/Searchcontext';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [isFetched, setIsFeched] = useState(false);

  return (

    <Router>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm, isFetched, setIsFeched }}>

        <Navbar />
        <Routes>
          <Route path="/" element={< Homepage />} />
          <Route path="/video" element={<GalleryPage2 />} />
        <Route path="/gallery" element={<GalleryPage />} />
          <Route
            path="/"
            element={
              isFetched
                ? <Navigate to="/gallery" />
                : <Navigate to="/video" />
            }
          />
          <Route path="/video" element={<GalleryPage2 />} />
          <Route path="/view/:imageId" element={<View360Page />} />
          <Route path="/video/:videoId" element={<Videopage />} />


        </Routes>
        <Footer />
      </SearchContext.Provider>

    </Router>
  );
}

export default App;