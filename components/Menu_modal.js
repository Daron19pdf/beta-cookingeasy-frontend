import styles from '../styles/Menu_modal.module.css';


function Menu_modal() {
  return (
    <div className={styles.ctn_modal}>
      <img src='COOKING_EASY.png' alt="logo" className={styles.logo} />
      <span className={styles.menu_item}>
        <img src='home.png' alt="accueil" className={styles.icon} />
      Accueil</span>
      <span className={styles.menu_item}>
        <img src='restaurant_menu.png' alt="menu" className={styles.icon} />
          Mon menu</span>
      <span className={styles.menu_item}>
        <img src='star.png' alt="menu" className={styles.icon} />
         Mes favoris</span>
      <span className={styles.menu_item}>
        <img src='person.png' alt="menu" className={styles.icon} />
          Mon profil</span>
      <span className={styles.menu_item}>
        <img src='auto_stories.png' alt="menu" className={styles.icon} />
          Ma liste de course</span>
      <img src='Livre.png' alt="livre" className={styles.logo2} />
      <span className={styles.menu_item}>Déconnexion</span>


     
      
      
    </div>
  );
}

export default Menu_modal;
