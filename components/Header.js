import styles from '../styles/Header.module.css';
import Menu_modal from './Menu_modal';
import { useState } from 'react';

function Header() {

  const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      setShowModal(!showModal);
    }

  return (
    <div className={styles.ctn_header} >
      {showModal && <Menu_modal />}
        <div className={styles.ctn_search} onClick={handleClick}> 
            <img src='menu.png' alt="menu" className={styles.menu} />
        </div>
        <div className={styles.ctn_logo}>
            <img src='logo-orange.png' alt="logo" className={styles.logo} /> 
        </div>  
        <div className={styles.ctn_search}></div> 
    </div>
  );
}

export default Header;
