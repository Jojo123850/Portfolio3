import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx';
import Interact from '../components/Boules.tsx';
import '../styles/home.scss'
import ParticlesEssai from '../components/ParticlesEssai.tsx';



const Accueil = () => {
    return(
        <>
        <ParticlesEssai /> 
        <header>
             <Navbar/>
        </header>

        <main>
            
                <hr></hr>
        <Interact/>
                <section id='section1'>
                     <h2>MON PORTFOLIO</h2>
                     <h3>Présentation de mes dernières expériences</h3>
                </section>

                <section id='section2'>
                    <div className='sectionclass'>
                    <article>
                         <p>Salut ! Je suis Giovanie, développeuse web et web mobile en formation. Curieuse et engagée, j’aime utiliser la technologie pour créer des solutions utiles et innovantes. Avant de me lancer dans le développement, je me suis investie dans des projets liés à l’environnement et à l’engagement associatif. Aujourd’hui, je combine cette sensibilité avec le code pour imaginer des applications qui ont un impact positif. Chaque projet est pour moi une occasion d’apprendre, de créer et de repousser mes limites afin de transformer des idées en expériences digitales modernes.</p>
                        <a href="/Projects">Explorer mes projets</a>
                    </article>
                    <article className='art'>
                        <img src="/images/Profil.png" alt="image" />
                        <div className="img-badge">✦ Disponible</div>
                    </article>
                    </div>

                </section>

              
                 <section id='section3'>
                <h2>Expérience personnelles</h2>

                <div className='sectionclass2'>
                <article>
                    <h4>Hackathon Orange & Nexta</h4>
                    <p>Finaliste nationale parmi plus de 70 projets innovants. Création d’une solution numérique fonctionnelle en temps limité en équipe, <span>Octobre 2021
                    Madagascar</span></p>    
                </article>

                    
                <article>
                    <h4>Youth Exchange - Erasmus+</h4>
                    <p>Participation à un programme international axé sur les solutions numériques pour le changement climatique. <span>Juin - Août 2024, Madagascar</span> </p>    
                </article>
                    
                <article>
                    <h4>Programme D-CLIC – SAYNA & OIF</h4>
                    <p>Formation en développement web avec apprentissage collaboratif via Discord.  <span> Février - Octobre 2023, Madagascar</span></p>    
                </article>

                    
                <article>
                    <h4>SAFIDI / AUF – Concours Application Mobile</h4>
                    <p>Finaliste nationale pour un projet d’application mobile à impact social. <span>Octobre 2021 - Février 2022, Madagascar</span>        
                    </p>    
                </article>

                </div>

                </section> 
          <section>
            <div className='sectionclass3'>
                <h2 id='formations'>Ce que j'ai appris, ce que je sais faire</h2>

                <div className='cards-grid'>
                <article>
                    <h3>Développement Web et Web mobile</h3>
                    <img src="/images/background.png" alt="devWeb" />
                </article>
                <article>
                    <h3>Licence en Environnement</h3>
                    <img src="/images/essai.png" alt="devWeb" />
                </article>
                <article>
                    <h3>DALF C1</h3>
                    <img src="/images/background.png" alt="devWeb" />
                </article>
                </div>
            </div>
        </section>

            <section className='sectionclass4'>
                    <div>
                       <h2>CONTACTE MOI ICI</h2>
                        <a className='contact' href="mailto:giovanieandrianirina@gmail.com">
                        giovanieandrianirina@gmail.com
                        </a>
                    </div>
            </section>         
        </main>

        <Footer/>
        </>
       

    ) 
      
};

export default Accueil;