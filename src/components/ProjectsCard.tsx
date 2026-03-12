type ProjectCardProps = {
    title: string;
    objectif: string;
    image1: string;
    image2: string;
    image3: string;
    Langages: string;
    lienGthub:string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, objectif, image1, image2, image3,Langages, lienGthub }) => (
    <div className="project-card">
       

        <div className="images-slider">
            <h2>{title}</h2>
            <h4>{Langages}</h4>
         <article>
            <p>{objectif}</p>
        </article>
            <div className="images-track">
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
            </div>
        </div>
            <a href={lienGthub} target="_blank" rel="noreferrer">
                Github
            </a>
    </div>
);


export default ProjectCard;


