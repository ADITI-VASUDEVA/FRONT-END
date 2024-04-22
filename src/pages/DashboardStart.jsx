import styles from "./DashboardStart.module.css";

const DashboardStart = () => {
  return (
    <div className={styles.dashboardStart}>
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
      <div className={styles.dashboard}>
        <div className={styles.rectangle} />
        <img
          className={styles.warehouseWorkersUsingLaptop}
          alt=""
          src="/warehouse-workers-using-laptop5-2-1@2x.png"
        />
        <div className={styles.rectangle1} />
        <div className={styles.dashboardContent}>
          <div className={styles.lookIntoYourParent}>
            <div className={styles.lookIntoYour}>Look Into Your</div>
            <div className={styles.ifYouDont}>
              “If you don’t try this app, you won’t become the superhero you
              were meant to be”
            </div>
          </div>
          <div className={styles.card1Parent}>
            <div className={styles.card1}>
              <div className={styles.content}>
                <div className={styles.background1} />
                <div className={styles.suppliers}>Suppliers</div>
                <div className={styles.seeMore}>See More ›</div>
              </div>
              <div className={styles.rectangle2} />
              <div className={styles.card1Child} />
            </div>
            <div className={styles.card1}>
              <div className={styles.media}>
                <div className={styles.rectangle2} />
                <div className={styles.card1Child} />
              </div>
              <div className={styles.content}>
                <div className={styles.background1} />
                <div className={styles.suppliers}>{`Warehouses `}</div>
                <div className={styles.seeMore}>See More ›</div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.rectangle2} />
              <div className={styles.card1Child} />
              <div className={styles.content}>
                <div className={styles.background1} />
                <div className={styles.suppliers}>{`Distributors `}</div>
                <div className={styles.seeMore}>See More ›</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.blurbgIcon} alt="" src="/blurbg.svg" />
      <div className={styles.warehouseNew}>
        <div className={styles.noWarehouse}>
          <div className={styles.subtext}>
            you are not associated with any warehouse
          </div>
          <div className={styles.text}>OOPS!</div>
          <img className={styles.errorsignIcon} alt="" src="/group-26816.svg" />
          <div className={styles.warebuttons}>
            <div className={styles.button}>
              <div className={styles.text1}>Join Warehouse</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.text1}>Create warehouse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStart;
