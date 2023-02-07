import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ProductPage from './components/pages/ProductPage';
import ContactPage from './components/pages/ContacPage'
import AboutUsPage from './components/pages/AboutUsPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
