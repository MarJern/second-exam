import './sass/style.scss';
import Layout from './components/layout/Layout'
import Footer from './components/footer/Footer'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Layout />
      <Footer />
    </AuthProvider>
  );
}

export default App;
