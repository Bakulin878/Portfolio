import { useContext } from "react";
import { ThemeContext } from "../../App";
import styles from "./SwichTheme.module.css"

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext);

  const handleClick = () =>{
    if (currentTheme?.theme === "dark"){
      currentTheme.setTheme("light")
    } else {
      currentTheme?.setTheme("dark")
    }
  }
  return <div className={styles.swich} onClick={handleClick}>{currentTheme?.theme}</div>;
};

export default SwitchTheme;
