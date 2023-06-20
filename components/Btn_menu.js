import styles from '../styles/Btn_menu.module.css';

function Btn_menu(props) {
  return (
    <div>
      <button className={styles.ctn_btn}>
        {props.item}
      </button>
    </div>
  );
}

export default Btn_menu;
