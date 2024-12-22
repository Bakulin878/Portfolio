import Carousel from '../Carousels';
import Contacts from '../Contacts';
import Projects from '../Projects';
import style from './Main.module.css'

const Main = () => {
  return (
    <main >
      <div >
      <Carousel />
      <Projects />
      <Contacts />
      </div>
    </main>
  );
};

export default Main;