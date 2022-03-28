import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../pages/home/HomePage';
import Login from '../pages/login/LoginPage';
import Kontakt from '../pages/kontakt/Kontakt';
import Oss from '../pages/oss/Oss';
import Seo from '../pages/seo/SEO';
import Tjenester from "../pages/tjenester/Tjenester";
import { AuthProvider } from "../../context/AuthContext";
import CreateNav from './Nav';


function Layout() {
	return (
        <AuthProvider>
            <Router>
                <CreateNav/>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    {/* <Route path="/detail/:param" element={<Detail />} /> */}
                    <Route path="/tjenester" element={<Tjenester />} />
                    <Route path="/seo" element={<Seo />} />
                    <Route path="/oss" element={<Oss />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
	);
}

export default Layout;