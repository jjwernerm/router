import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importar componentes necesarios para el enrutamiento

import Header from './layout/Header.jsx'; // Importar el componente Header
import Footer from './layout/Footer.jsx'; // Importar el componente Footer

import Home from './pages/Home.jsx'; // Importar el componente Home
import About from './pages/About.jsx'; // Importar el componente About
import Contact from './pages/Contact.jsx'; // Importar el componente Contact
import NotFound from "./pages/NotFound.jsx"; // Importar el componente NotFound

import Navbar from './components/Navbar.jsx'; // Importar el componente Navbar

function App() {
  return (
    <>
      {/* Configurar el enrutador */}
      <BrowserRouter>
        <Header /> {/* Renderizar el componente Header */}
        <Navbar /> {/* Renderizar el componente Navbar */}
        
        {/* Definir las rutas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para el componente Home */}
          <Route path="/about" element={<About />} /> {/* Ruta para el componente About */}
          <Route path="/contact" element={<Contact />} /> {/* Ruta para el componente Contact */}
          <Route path="*" element={<NotFound />} /> {/* Ruta para el componente NotFound, que se renderiza para cualquier ruta no definida */}
        </Routes>
        
        <Footer /> {/* Renderizar el componente Footer */}
      </BrowserRouter>
    </>
  );
}

export default App;