import './css/portfolio.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './sections/navBar';
import Content from './sections/content';
import Footer from './sections/footer';

function Website() {

  const websiteTitle = "Samuel Starck Sjøen";

  return (
    <Router>
      <div className="website">
        <NavBar title={websiteTitle} />
        <Content title={websiteTitle} />
        <Footer title={websiteTitle}/>
      </div>
    </Router>
  );
}

export default Website;