import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/home/HomePage';
import Login from '../pages/login/LoginPage';
import Kontakt from '../pages/kontakt/Kontakt';
import Oss from '../pages/oss/Oss';
import Seo from '../pages/seo/SEO';
import Tjenester from "../pages/tjenester/Tjenester";
import Admin from "../admin/AdminPage"
import ContentPage from "../admin/content/ContentPage";
import AddContent from "../admin/content/AddContent";
import { AuthProvider } from "../../context/AuthContext";
import CreateNav from './Nav';
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "./Breadcrumb";
import { Breadcrumb } from "react-bootstrap";
import Footer from "../footer/Footer"


function Layout() {
	return (
        <>
        <CreateNav/>
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            {/* <Route path="/detail/:param" element={<Detail />} /> */}
            <Route path="/tjenester" element={<Tjenester />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/oss" element={<Oss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" exact element={<Admin />} />
            <Route path="/admin/content" exact element={<ContentPage />} />
            <Route path="/admin/content/add" element={<AddContent />} />
        </Routes>
        </>
	);
}

export default Layout;