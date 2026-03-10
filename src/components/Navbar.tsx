import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">A propos de moi</Link>
        <article>
             <Link to="/Projects">Mes projets</Link>
            <a href="projet-portfolio/public/images/CV Giovanie .pdf" download="Giovanie-CV.pdf">
             Télécharger mon CV
            </a>
           
        </article>

    </nav>
);

export default Navbar;