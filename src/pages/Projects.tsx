import Footer from '../components/Footer.tsx';
import ProjectsCard from '../components/ProjectsCard';
import '../styles/projects.scss';
import data from '../data/projects.json';
import ParticlesEssai from '../components/ParticlesEssai.tsx';

type Project = {
    id: number;
    title: string;
    objectif: string;
    image1: string;
    image2: string;
    image3: string;
    Langages:string;
    lienGthub: string;
};

const Projects = () => {
    return (
        <>
            <header>
              <a href="/">Retour</a>
            </header>
            <main>
                <section>
            <ParticlesEssai/>
                    <h3>Mes projets réalisés</h3>
                </section>

                <section>
                    <div className="project-list">
                        {(data as Project[]).map((project) => (
                            <ProjectsCard
                                key={project.id}
                                title={project.title}
                                objectif={project.objectif}
                                image1={project.image1}
                                image2={project.image2}
                                image3={project.image3}
                                Langages={project.Langages}
                                lienGthub={project.lienGthub}

                            />
                        ))}
                    </div>

                </section>
            </main>

            <Footer />
        </>
    );
};

export default Projects;
