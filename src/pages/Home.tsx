import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx';
import '../styles/home.scss'


const Accueil = () => {
    return(
          <>
        <header>
             <Navbar/>
        </header>

        <main>
            
                <hr></hr>
                <section id='section1'>
                     <h2>MON PORTFOLIO</h2>
                     <h3>Présentation de mes dernières expériences</h3>
                </section>
                <section id='section2'>
                    <div className='sectionclass'>
                    <article>
                         <p>Salut ! Je suis Giovanie, développeuse web et web mobile en formation. Curieuse et engagée, j’aime utiliser la technologie pour créer des solutions utiles et innovantes. Avant de me lancer dans le développement, je me suis investie dans des projets liés à l’environnement et à l’engagement associatif. Aujourd’hui, je combine cette sensibilité avec le code pour imaginer des applications qui ont un impact positif. Chaque projet est pour moi une occasion d’apprendre, de créer et de repousser mes limites afin de transformer des idées en expériences digitales modernes.</p>
                        <a href="#">Explorer mes projets</a>
                    </article>
                    <img src="/images/Profil.png" alt="image" />
                    </div>

                </section>
               
                
           
        </main>

        <Footer/>
        </>
       

    ) 
      
};

export default Accueil;