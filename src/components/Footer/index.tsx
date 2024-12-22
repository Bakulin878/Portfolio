import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__inner}>
          <p>© Никита Сергеевич <br/> HTML верстальщик, создание сайтов Уфа</p>
          <p><a href="https://github.com/Bakulin878" target="_blank">💻 Профиль GitHub</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
