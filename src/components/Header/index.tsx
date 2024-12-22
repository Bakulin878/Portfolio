import Logo from "../Logo/Logo";
import Nav from "../Nav";
import styles from "./Header.module.css";
import avatarImage from "@assets/images/photo_name.jpg";
import video from "../../video/mixkit-software-developer-working-while-drinks-coffee-1730-hd-ready.mp4";
import SwitchTheme from "../SwichTheme";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__row}>
          <img
            src={avatarImage}
            width="540px"
            alt="Photo"
            className={styles.header__img}
          />
          <div className={styles.header__desc}>
            <h1 className={styles.header__title}>Никита Сергеевич</h1>
            <p className={styles.header__text}>
             Frontend-разработчик,
              <br /> создание сайтов
            </p>
            <div className={styles.header__btns}>
              <a href="#portfolio" className={styles.btn}>
                Портфолио
              </a>
              <a href="#contacts" className={styles.btn__outline}>
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
      <video className={styles.header__video} autoPlay muted loop playsInline>
        <source type="video/mp4" src={video} />
      </video>
      <SwitchTheme />
    </header>
  );
};

export default Header;
