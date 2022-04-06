import './sass/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Footer from './components/footer/Footer'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout />
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
