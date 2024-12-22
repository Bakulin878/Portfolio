import styles from "./Carousels.module.css";
import techStack from "../../data/techStack.json";
import { Technology } from "../../types";

const Carousel = () => {
  return (
    <div className={styles.carouse }>
      <div className={styles.carouse_child}>
        <span className={styles.carousel__item}>
          {techStack.technologies.map((tech: Technology) => (
            <div key={tech.id} className={styles.brand}>
              <img className={styles.img} src={`${tech.icon}`} />
            </div>
          ))}
        </span>
        <span className={styles.carousel__item}>
          {techStack.technologies.map((tech: Technology) => (
            <div key={tech.id} className={styles.brand}>
              <img className={styles.img} src={`${tech.icon}`} />
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
