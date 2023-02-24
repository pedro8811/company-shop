import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContacPage'
import AboutUsPage from './pages/AboutUsPage'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth'

const Private = ({ Item }) => {
  const {signed} = useAuth();

  return signed > 0 ? <Item /> : <SignInPage />
}

export default function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/products" element={<Private Item={ProductPage} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/boautus" element={<AboutUsPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
