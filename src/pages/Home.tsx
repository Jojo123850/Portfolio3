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
                        {/* <div id='profil'>
                            
                            <a href="https://github.com/Jojo123850"><i className="fa-brands fa-github"></i></a>
                          
                            <a href="nkedin.com/in/giovanie-andrianirina-7b397926a/"><i className="fa-brands fa-linkedin"></i></a>
                        </div> */}
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
                        <h2 id='formations'>CE QUE J'AI APPRIS, CE QUE JE SAIS FAIRE</h2>

                        
                    </div>
                </section>

                <section>
                    <div>
                        <p>Envoie moi un email <a href="mailto:giovanieandrianirina@gmail.com">Ici</a></p>
                    </div>
                </section>          
        </main>

        <Footer/>
        </>
       

    ) 
      
};

export default Accueil;