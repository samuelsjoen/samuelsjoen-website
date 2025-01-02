import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PhotographyPage from './pages/photography/photographyPage';
import FilmographyPage from './pages/filmography/filmographyPage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';

function Content({ title }) {
    return (
        <div className="content">
            <Routes title={title}>
                <Route path="/" element={<Navigate to="/about" />} />
                {/* <Route path="/photography" element={<PhotographyPage />} /> */}
                <Route path="/wedding" element={<WeddingPage />} />
                <Route path="/analog" element={<Analog />} />
                <Route path="/digital" element={<Digital />} />
                <Route path="/filmography" element={<FilmographyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}
  
export default Content;