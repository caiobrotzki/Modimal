import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import User from "./pages/Register";
import Login from "./pages/login";
import ContactUS from "./pages/ContactUS";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registre" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element = {<ContactUS />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
