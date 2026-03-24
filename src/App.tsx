import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Home';
import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

function App() {
	return(
	  <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Projects" element={<Projects/>} />
        {/* <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} /> */}
    </Routes>
    
	);
	
	}

  export default App;
