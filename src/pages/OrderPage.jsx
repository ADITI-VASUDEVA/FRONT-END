import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OrderPage.module.css";

const OrderPage = () => {
  const navigate = useNavigate();

  const onAddPdtButtonClick = useCallback(() => {
    navigate("/create-order-page");
  }, [navigate]);

  const onLightContainer1Click = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  const onLightContainer2Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onLightContainer3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/view-order-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/view-order-page");
  }, [navigate]);

  return (
    <div className={styles.orderPage}>
      <div className={styles.addPdtButton} onClick={onAddPdtButtonClick}>
        <div className={styles.background} />
        <div className={styles.text}>Add new Order+</div>
      </div>
      <div className={styles.sideBar}>
        <div className={styles.button}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/background2.svg"
          />
          <div className={styles.signupText}>Clear List</div>
        </div>
      </div>
      <div className={styles.exportButton}>
        <div className={styles.text1}>Export</div>
        <div className={styles.background1} />
        <img className={styles.sharefillIcon} alt="" src="/sharefill.svg" />
      </div>
      <div className={styles.backButton}>
        <div className={styles.background} />
        <div className={styles.text2}>Back</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.navbar}>
        <div className={styles.background3} />
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
      <div className={styles.sidePanel}>
        <div className={styles.sidePannel} />
        <div className={styles.light}>
          <div className={styles.button}>
            <div className={styles.button}>
              <div className={styles.background4} />
              <div className={styles.text3}>Partner</div>
            </div>
          </div>
        </div>
        <div className={styles.light1} onClick={onLightContainer1Click}>
          <div className={styles.button}>
            <div className={styles.buttonPrimary3}>
              <div className={styles.background4} />
              <div className={styles.text3}>Report</div>
            </div>
          </div>
        </div>
        <div className={styles.light2} onClick={onLightContainer2Click}>
          <div className={styles.button}>
            <div className={styles.button}>
              <div className={styles.background4} />
              <div className={styles.text3}>Inventory</div>
            </div>
          </div>
        </div>
        <div className={styles.sideBarButtons} onClick={onSideBarButtonsClick}>
          <div className={styles.button}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background1.svg"
            />
            <div className={styles.signupText1}>Order</div>
          </div>
        </div>
        <div className={styles.light3} onClick={onLightContainer3Click}>
          <div className={styles.button}>
            <div className={styles.button}>
              <div className={styles.background4} />
              <div className={styles.text3}>Dashboard</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.titlebarorders}>
        <div className={styles.titlebarordersChild} />
        <div className={styles.idParent}>
          <div className={styles.id}>ID</div>
          <div className={styles.type}>Type of order</div>
          <div className={styles.type}>Partner</div>
          <div className={styles.type}>Date</div>
          <div className={styles.bill}>bill</div>
          <div className={styles.status}>Status</div>
          <div className={styles.payment}>Payment</div>
        </div>
      </div>
      <div className={styles.rowOrdersParent}>
        <div className={styles.rowOrders}>
          <div className={styles.titlebarordersChild} />
          <div className={styles.parent}>
            <div className={styles.div}>1</div>
            <div className={styles.sales}>Sales</div>
            <div className={styles.sales}>lorem ipsum</div>
            <div className={styles.sales}>12/12/2024</div>
            <div className={styles.order}>400</div>
            <div className={styles.order}>order</div>
            <div className={styles.checkbox}>
              <img
                className={styles.checkboxIcon}
                alt=""
                src="/checkbox1.svg"
              />
              <div className={styles.unchecked}>Completed</div>
            </div>
            <div className={styles.button2} onClick={onButtonContainerClick}>
              <div className={styles.text7}>View</div>
              <div className={styles.background8} />
            </div>
            <div className={styles.editDelete}>
              <img
                className={styles.deleteFill0Wght400Grad0OpsIcon}
                alt=""
                src="/delete-fill0-wght400-grad0-opsz24-1.svg"
              />
              <img
                className={styles.editFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/edit-fill0-wght400-grad0-opsz24-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rowOrders}>
          <div className={styles.titlebarordersChild} />
          <div className={styles.parent}>
            <div className={styles.div}>1</div>
            <div className={styles.sales}>Sales</div>
            <div className={styles.sales}>lorem ipsum</div>
            <div className={styles.sales}>12/12/2024</div>
            <div className={styles.order}>400</div>
            <div className={styles.order}>order</div>
            <div className={styles.checkbox}>
              <img
                className={styles.checkboxIcon}
                alt=""
                src="/checkbox1.svg"
              />
              <div className={styles.unchecked}>Completed</div>
            </div>
            <div className={styles.button2} onClick={onButtonContainer2Click}>
              <div className={styles.text7}>View</div>
              <div className={styles.background8} />
            </div>
            <div className={styles.editDelete}>
              <img
                className={styles.deleteFill0Wght400Grad0OpsIcon}
                alt=""
                src="/delete-fill0-wght400-grad0-opsz24-1.svg"
              />
              <img
                className={styles.editFill0Wght400Grad0Opsz2Icon}
                alt=""
                src="/edit-fill0-wght400-grad0-opsz24-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dropdowns}>
        <div className={styles.inputField}>
          <div className={styles.text9}>
            <div className={styles.dropdownOption}>Dropdown option</div>
            <img className={styles.filterIcon} alt="" src="/filter.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
