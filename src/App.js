import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/Homepage'
import { AboutPage } from './pages/Aboutpage'
import { AdvertPage } from './pages/Advertpage'
import { ContactPage } from './pages/Contactpage'
import { ErrorPage } from './pages/Errorpage'


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/aboutpage"> About </Link>
        <Link to="/advertpage"> Advert </Link>
        <Link to="/contactpage"> Contact </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/advertpage" element={<AdvertPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    </Router>
    
  );
}

export default App;
