import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContacPage'
import AboutUsPage from './pages/AboutUsPage'

export default function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
    </div>
  );
}
