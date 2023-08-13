
import './App.css';
import { Toaster } from 'react-hot-toast';
import Layout from './Components/Layout';
import Header from './Components/Header/Header';
import HeroSetion from './Components/HeroSetion/HeroSetion';
function App() {
  return (
 <>
 <Layout>
  <Header/>
  <HeroSetion/>
 <Toaster />
 </Layout>
 </>
  );
}

export default App;
