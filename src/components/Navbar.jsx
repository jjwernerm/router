import { NavLink } from "react-router-dom"; // Importar el componente NavLink para enlaces de navegación

const Navbar = () => {
  return (
    <>

      <div className='bg-black text-white uppercase font-bold flex justify-center gap-4 p-3'>
        <NavLink
          to="/" // Enlace a la ruta Home
          className={({ isActive }) => 
            isActive ? "text-teal-600" : "text-white hover:text-yellow-500" // Estilo condicional para el enlace activo
          }
        >Home</NavLink>
        <NavLink
          to="/about" // Enlace a la ruta About
          className={({ isActive }) => 
            isActive ? "text-teal-600" : "text-white hover:text-yellow-500" // Estilo condicional para el enlace activo
          }
        >About</NavLink>
        <NavLink
          to="/contact" // Enlace a la ruta Contact
          className={({ isActive }) => 
            isActive ? "text-teal-600" : "text-white hover:text-yellow-500" // Estilo condicional para el enlace activo
          }
        >Contact</NavLink>
      </div>
    </>
  )
};

export default Navbar;