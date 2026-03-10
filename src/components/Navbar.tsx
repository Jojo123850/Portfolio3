import { Link } from 'react-router-dom';
// import './Navbar.scss';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Giovanie ANDRIANIRINA</Link>
       <Link to="/">Accueil</Link>
       {/* <Link to="/projects">Projets</Link>
       <Link to="/contact">Contact</Link> */}

    </nav>
);

export default Navbar;