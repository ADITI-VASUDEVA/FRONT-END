import styles from "./EditCartPage.module.css";

const EditCartPage = () => {
  return (
    <div className={styles.editCartPage}>
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
      <div className={styles.cart}>
        <div className={styles.cartTable}>
          <div className={styles.cartRows}>
            <div className={styles.cartRowsChild} />
            <div className={styles.parent}>
              <div className={styles.div}>1</div>
              <div className={styles.sales}>Sales</div>
              <div className={styles.sales}>200</div>
              <div className={styles.sales}>2000</div>
            </div>
          </div>
          <div className={styles.cartRows}>
            <div className={styles.cartRowsChild} />
            <div className={styles.parent}>
              <div className={styles.div}>1</div>
              <div className={styles.sales}>Sales</div>
              <div className={styles.sales}>200</div>
              <div className={styles.sales}>2000</div>
            </div>
          </div>
        </div>
        <div className={styles.cartTitleBar}>
          <div className={styles.cartRowsChild} />
          <div className={styles.idParent}>
            <div className={styles.id}>ID</div>
            <div className={styles.product}>Product</div>
            <div className={styles.product}>quantity</div>
            <div className={styles.product}>Price</div>
          </div>
          <img
            className={styles.closeCircleIcon}
            alt=""
            src="/closecircle1.svg"
          />
        </div>
        <div className={styles.orderIdParent}>
          <div className={styles.orderId}>Order Id</div>
          <div className={styles.orderType}>Order Type</div>
        </div>
        <img
          className={styles.closeCircleIcon1}
          alt=""
          src="/closecircle1.svg"
        />
        <div className={styles.addPdtButton}>
          <div className={styles.text}>Add Item</div>
        </div>
      </div>
    </div>
  );
};

export default EditCartPage;
