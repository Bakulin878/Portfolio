import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import { Project } from "../../types";

const Projects = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <h2 className={styles.portfolio__title}>Мои проекты</h2>
        <div className={styles.portfolio__projects}>
          {projectsData.projects.map((project: Project) => (
            <article key={project.id} className={styles.portfolio__project}>
              <a href={project.livePreviewUrl} target="_blank">
                <img
                  className={styles.portfolio__project_img}
                  src={project.image}
                  alt={project.title}
                />
              </a>
              <h3 className={styles.portfolio__project_title}>
                <a href={project.livePreviewUrl} target="_blank">
                  {project.description}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
