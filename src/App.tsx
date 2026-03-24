import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Home';
import Projects from './pages/Projects';

function App() {
	return(
	  <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Projects" element={<Projects/>} />
    </Routes>
    
	);
	
	}

  export default App;
