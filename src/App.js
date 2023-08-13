
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Components/Layout';
import AboutPage from './Pages/AboutPage';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
function App() {
  return (
    <>
    <Layout>
    <Router>
     <Routes> 
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    <Toaster />
    </Layout>
    </>
  );
}

export default App;
