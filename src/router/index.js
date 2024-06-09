import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../components/Projects";
import Contact from "../components/contact/Contact";
import Inicio from "../components/inicio/Inicio";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App inner={<Inicio/>}/>
    },
    {
        path: '/Proyectos',
        element: <App inner={<Projects/>}/>
    },
    {
        path: '/Contacto',
        element: <App inner={<Contact/>}/>
    },
])