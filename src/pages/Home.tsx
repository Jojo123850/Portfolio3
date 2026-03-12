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
                <article>

                    <h4>Hackathon Orange & Nexta</h4>
                    <p>Finaliste nationale parmi plus de 70 projets innovants. Création d’une solution numérique fonctionnelle en temps limité en équipe. Expérience en design thinking, élaboration de business plan et pratique du pitch de projet, Octobre 2021
                    Madagascar.</p>
                    
                </article>

                    
                <article>

                
                    <h4>Youth Exchange - Erasmus+</h4>
                    <p>Participation à un programme international axé sur les solutions numériques pour le changement climatique. Travail collaboratif avec des jeunes européens et pratique professionnelle de la langue anglaise,Juin - Août 2024.</p>
                    
                </article>
                    
                <article>

               
                    <h4>Programme D-CLIC – SAYNA & OIF</h4>
                    <p>Formation en développement web avec apprentissage collaboratif via Discord. Acquisition des bases du développement et obtention de certifications en bureautique et informatique, Février - Octobre 2023</p>
                    
                </article>

                    
                <article>

                    <h4>CSAFIDI / AUF – Concours Application Mobile</h4>
                    <p>Finaliste nationale pour un projet d’application mobile à impact social. Découverte du développement d’applications avec App Inventor et initiation à la conception d’outils numériques accessibles, Octobre 2021 - Février 2022
                    Madagascar</p>
                    
                </article>

                </section>
               
                
           
        </main>

        <Footer/>
        </>
       

    ) 
      
};

export default Accueil;