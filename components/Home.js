import styles from '../styles/Home.module.css';
import Header from './Header';
import Btn_menu from './btn_menu';
import Link from 'next/link';

function Home() {
  const item_menu = ["Créer un nouveau menu", "Mon menu enregistré", "Ma liste de course"];

  const menu = item_menu.map((item, index) => {
    let link = "";

    if (item === "Créer un nouveau menu") {
      link = "/thisWeek";
    } else if (item === "Mon menu enregistré") {
      link = "/save_menu";
    } else if (item === "Ma liste de course") {
      link = "/wishList";
    }

    return (
      <Link key={index} href={link}>
        <a className={styles.blah}>
          <Btn_menu item={item} />
        </a>
      </Link>
    );
  });

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Bonjour Cyrille !</h1>
        {menu}
        <img className={styles.img_penne} src="penne.jpg" alt="Penne" />
      </main>
    </div>
  );
}

export default Home;
