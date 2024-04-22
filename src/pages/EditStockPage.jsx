import styles from "./EditStockPage.module.css";

const EditStockPage = () => {
  return (
    <div className={styles.editStockPage}>
      <div className={styles.navbar}>
        <div className={styles.background} />
        <b className={styles.logo}>ITEMIZE</b>
        <div className={styles.icons}>
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/notificationsstyle4.svg"
          />
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/paperplanefill.svg"
          />
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/personfill.svg"
          />
          <img
            className={styles.notificationsstyle4Icon}
            alt=""
            src="/reorderthreeoutline.svg"
          />
        </div>
      </div>
      <img className={styles.blurbgIcon} alt="" src="/blurbg.svg" />
      <div className={styles.addStock}>
        <div className={styles.background1} />
        <div className={styles.button}>
          <div className={styles.text}>Cancel</div>
          <div className={styles.background2} />
        </div>
        <div className={styles.button1}>
          <div className={styles.text}>Confirm</div>
          <div className={styles.background2} />
        </div>
        <div className={styles.eitherOr}>
          <div className={styles.radioButton}>
            <div className={styles.radio}>
              <div className={styles.radio1} />
              <div className={styles.dot} />
            </div>
            <div className={styles.radioSelection}>Add</div>
          </div>
          <div className={styles.radioButton}>
            <div className={styles.radio}>
              <div className={styles.radio1} />
              <div className={styles.dot} />
            </div>
            <div className={styles.radioSelection}>Delete</div>
          </div>
        </div>
        <div className={styles.textInputs}>
          <div className={styles.inputTextLabel}>enter the quantity</div>
          <div className={styles.inputField}>
            <div className={styles.text2}>
              <div className={styles.typeHere}>Type here</div>
              <img className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.productA}>Product A</div>
      </div>
    </div>
  );
};

export default EditStockPage;
