import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PhotographyPage from './pages/photographyPage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';

function Content({ title }) {
    return (
        <div className="content">
            <Routes title={title}>
                <Route path="/" element={<Navigate to="/photography" />} />
                <Route path="/photography" element={<PhotographyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}
  
export default Content;